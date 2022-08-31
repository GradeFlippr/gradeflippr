import { join } from 'path';
import { makeSchema } from 'nexus';
import * as types from './types.js';

export default makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), 'server', 'graphql', 'schema.graphql'),
    typegen: join(process.cwd(), 'server', 'graphql', 'nexus-typegen.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'server', 'graphql', 'context.ts'),
    export: 'Context',
  },
});
