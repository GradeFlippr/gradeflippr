import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';

// export const Query = objectType({
//   name: 'Query',
//   definition(t) {
//     t.nonNull.boolean('ok');
//   },
// });

export const Subject = objectType({
  name: 'Subject',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.int('name');
  },
});

export const subjects = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('subjects', {
      type: 'Subject',
      resolve(parent, args, context, info) {
        return [];
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
        return [];
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
      resolve(parent, args, context, info) {
        return [];
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
        sessionId: nonNull(intArg()),
        tutor: nonNull(stringArg()),
        subject: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { firstName, lastName, email, password, schoolId } = args;
        // TODO: hash password
        // TODO: session storage
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
