import { cityResolver } from "./cityResolver";
import { launchResolver } from "./launchResolver";
import { launchesResolver } from "./launchesResolver";
import { rocketResolver } from "./rocketResolver";
import { rocketsResolver } from "./rocketsResolver";

export const resolvers = {
  Query: {
    launches: launchesResolver,
    launch: launchResolver,
    rockets: rocketsResolver,
    rocket: rocketResolver,
    city: cityResolver,
  },
};
