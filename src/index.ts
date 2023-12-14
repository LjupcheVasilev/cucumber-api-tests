import { ApolloServer, BaseContext } from "@apollo/server";
import {
  StartStandaloneServerOptions,
  startStandaloneServer,
} from "@apollo/server/standalone";

import { typeDefs } from "./Domain/schema";

import { resolvers } from "./Application/resolvers";
import { SpaceXDataSource } from "./Infrastructure/SpaceX/SpaceXDataSource";
import { GeoDataSource } from "./Infrastructure/GeoDataSource/GeoDataSource";

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  introspection: true,
});

const context: StartStandaloneServerOptions<BaseContext>["context"] =
  async () => {
    return {
      dataSources: {
        SpaceX: new SpaceXDataSource(),
        GeoDataSource: new GeoDataSource(),
      },
    };
  };

startStandaloneServer(server, {
  listen: { port: 4000 },
  context,
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
