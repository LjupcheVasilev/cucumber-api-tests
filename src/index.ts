import { ApolloServer, BaseContext } from "@apollo/server";
import {
  StartStandaloneServerOptions,
  startStandaloneServer,
} from "@apollo/server/standalone";

import { typeDefs } from "./Domain/schema";

import { resolvers } from "./Application/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
