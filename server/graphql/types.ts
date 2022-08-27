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
      resolve(parent, args, context, info) {
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
      resolve(parent, args, context, info) {
        return context.prisma.school.findMany();
      },
    });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('first_name');
    t.nonNull.string('last_name');
    t.nonNull.string('username');
    t.nonNull.string('password');
    t.nonNull.string('email');
    t.nonNull.field('school', { type: School });
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
      },
      resolve(parent, args, context) {
        const { firstName, lastName, email, password, schoolId } = args;
        // TODO: hash password
        // TODO: session storage
      },
    });
  },
});

export const login = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('register', {
      type: 'User',
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { firstName, lastName, email, password, schoolId } = args;
        // TODO: hash password
        // TODO: session storage
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
    t.nonNull.field('tutor', { type: User });
    t.nonNull.field('student', { type: User });
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
      resolve(parent, args, context, info) {
        context.prisma.session.findMany({ where: { tutor_name: args.tutorName } });
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
        tutor: nonNull(stringArg()),
        subjectId: nonNull(intArg()),
        timestamp: nonNull(intArg()),
      },
      resolve(parent, args, context) {
        const { tutor, subjectId, timestamp } = args;
        return context.prisma.session.create({
          data: {
            tutor_name: tutor,
            subject_id: subjectId,
            timestamp: new Date(timestamp),
          },
        });
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
      resolve(parent, args, context) {
        const { firstName, lastName, email, password, schoolId } = args;
        // TODO: verify the user deleting the session is authorized to do so
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
      resolve(parent, args, context) {},
    });
  },
});
