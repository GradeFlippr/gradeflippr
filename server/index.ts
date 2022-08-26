import { ApolloServer } from 'apollo-server';

import schema from './graphql/schema.js';

const server = new ApolloServer({
  schema,
});

const port = process.env.PORT || 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
