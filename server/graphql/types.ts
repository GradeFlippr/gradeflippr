import { Session as PrismaSession } from '@prisma/client';
import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';

export const Subject = objectType({
  name: 'Subject',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});

export const subjects = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('subjects', {
      type: 'Subject',
      resolve(parent, args, context) {
        return context.prisma.subject.findMany();
      },
    });
  },
});

export const School = objectType({
  name: 'School',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});

export const schools = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('schools', {
      type: 'School',
      resolve(parent, args, context) {
        return context.prisma.school.findMany();
      },
    });
  },
});

export const Role = objectType({
  name: 'Role',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('role');
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('firstName');
    t.nonNull.string('lastName');
    t.nonNull.string('username');
    t.string('password');
    t.nonNull.string('email');
    t.nonNull.field('school', {
      type: School,
      async resolve(parent, args, context) {
        const school = await context.prisma.user
          .findUnique({
            where: { username: parent.username },
          })
          .school();
        if (!school) {
          throw new Error('Bad Data');
        }

        return school;
      },
    });
    t.nonNull.list.nonNull.field('roles', {
      type: Role,
      async resolve(parent, args, context) {
        const roles = await context.prisma.user
          .findUnique({
            where: { username: parent.username },
          })
          .roles();

        if (!roles) {
          throw new Error(`[server] ERROR: User ${parent.username} has no roles`);
        }

        return [...roles];
      },
    });
  },
});

export const register = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('register', {
      type: 'User',
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
        schoolId: nonNull(intArg()),
        roleId: nonNull(intArg()),
      },
      async resolve(parent, args, context) {
        const { firstName, lastName, email, password, schoolId, username, roleId } = args;
        // TODO: hash password
        // TODO: session storage

        try {
          const user = await context.prisma.user.create({
            data: {
              email,
              first_name: firstName,
              last_name: lastName,
              password,
              school_id: schoolId,
              username,
              roles: {
                connect: [{ id: roleId }],
              },
            },
          });

          const school = await context.prisma.school.findUnique({ where: { id: user.school_id } });
          if (!school)
            throw new Error(
              `[server]: ERROR: User ${user.username} missing school ${user.school_id}`
            );

          return {
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            school,
          };
        } catch (err) {
          throw new Error(`[server]: ERROR: ${err}`);
        }
      },
    });
  },
});

export const login = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('login', {
      type: 'User',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { username, password } = args;

        // TODO: hash password
        // TODO: session storage

        const hashedPassword = password;
        const user = await context.prisma.user.findFirst({
          where: {
            username,
            password: hashedPassword,
          },
        });

        // TODO: throw a better error.
        if (!user) throw new Error('Invalid login');

        const school = await context.prisma.school.findUnique({ where: { id: user.school_id } });

        return {
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          school,
        };
      },
    });
  },
});

export const Session = objectType({
  name: 'Session',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.int('timestamp');
    t.field('subject', { type: Subject });
    t.nonNull.field('tutor', {
      type: User,
      async resolve(parent, args, context) {
        const tutor = await context.prisma.session.findUnique({ where: { id: parent.id } }).tutor();
        if (!tutor) throw new Error('Invalid session: Missing tutor info on session');
        return tutor;
      },
    });
    t.field('student', {
      type: User,
      resolve(parent, args, context) {
        return context.prisma.session.findUnique({ where: { id: parent.id } }).student();
      },
    });
  },
});

export const sessions = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('sessions', {
      type: 'Session',
      args: {
        tutorName: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        return context.prisma.session
          .findMany({
            where: { tutor_name: args.tutorName },
          })
          .then((s: any) =>
            s.map(async (session: PrismaSession) => {
              const student = await context.prisma.user.findUnique({
                where: {
                  username: args.tutorName, // FIXME: replace with student name
                },
              });

              const tutor = await context.prisma.user.findUnique({
                where: {
                  username: args.tutorName,
                },
              });

              return {
                id: session.id,
                timestamp: new Date(session.timestamp).valueOf(),
                student,
                tutor,
                subject: {
                  id: 123,
                  name: 'test',
                },
              };
            })
          );
      },
    });
  },
});

export const addSession = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('addSession', {
      type: 'Session',
      args: {
        tutorName: nonNull(stringArg()),
        subjectId: nonNull(intArg()),
        timestamp: nonNull(intArg()),
      },
      async resolve(parent, args, context) {
        const { tutorName, subjectId, timestamp } = args;
        const session = await context.prisma.session.create({
          data: {
            tutor_name: tutorName,
            subject_id: subjectId,
            timestamp: new Date(timestamp),
          },
        });

        const tutor = await context.prisma.user.findUnique({
          where: {
            username: args.tutorName, // FIXME: replace with student name
          },
        });

        return {
          id: session.id,
          timestamp: new Date(session.timestamp).valueOf(),
          student: null,
          tutor,
          subject: {
            id: 123,
            name: 'test',
          },
        };
      },
    });
  },
});

export const deleteSession = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteSession', {
      type: 'Session',
      args: {
        sessionId: nonNull(intArg()),
      },
      async resolve(parent, args, context) {
        // TODO: verify the user deleting the session is authorized to do so
        const session = await context.prisma.session.delete({ where: { id: args.sessionId } });

        const tutor = await context.prisma.user.findUnique({
          where: {
            username: session.tutor_name, // FIXME: replace with student name
          },
        });

        const student = session.student_name
          ? await context.prisma.user.findUnique({
              where: {
                username: session.student_name, // FIXME: replace with student name
              },
            })
          : null;

        const subject = session.subject_id
          ? await context.prisma.subject.findUnique({
              where: {
                id: Number(session.subject_id),
              },
            })
          : null;

        return {
          id: session.id,
          timestamp: new Date(session.timestamp).valueOf(),
          student,
          tutor,
          subject,
        };
      },
    });
  },
});

export const schedule = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('schedule', {
      type: 'Session',
      args: {
        sessionId: nonNull(intArg()),
        student: nonNull(stringArg()),
        subject: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const session = await context.prisma.session.update({
          where: { id: args.sessionId },
          data: {
            student_name: args.student,
            subject_id: Number(args.subject),
          },
        });

        const tutor = await context.prisma.user.findUnique({
          where: {
            username: session.tutor_name, // FIXME: replace with student name
          },
        });

        const student = await context.prisma.user.findUnique({
          where: {
            username: args.student, // FIXME: replace with student name
          },
        });

        const subject = await context.prisma.subject.findUnique({
          where: {
            id: Number(args.subject),
          },
        });

        return {
          id: session.id,
          timestamp: new Date(session.timestamp).valueOf(),
          student,
          tutor,
          subject,
        };
      },
    });
  },
});
