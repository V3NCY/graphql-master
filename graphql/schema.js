import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";
import { makeExecutableSchema } from '@graphql-tools/schema';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});