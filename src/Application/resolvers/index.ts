import { City, Launch, Launchpad, Rocket } from "../../Domain/types";

export const resolvers = {
  Query: {
    launch: async (
      parent: any,
      { id }: { id: string },
    ) => {
      const launch: Launch = await fetch(`https://api.spacexdata.com/v4/launches/${id}`).then(
        (res: Response) => res.json()
      ) as Launch;

      const launchpad = await fetch(
        `https://api.spacexdata.com/v4/launchpads/${launch.launchpad}`
      ).then((res) => res.json()) as Launchpad;

      const city = await fetch(
        `https://api.geodatasource.com/city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${launchpad.latitude}&lng=${launchpad.longitude}`
      ).then((res) => res.json()) as City;

      const rocket = await fetch(
        `https://api.spacexdata.com/v4/rockets/${launch.rocket}`
      ).then((res) => res.json()) as Rocket;

      launchpad.city = city;
      launch.launchpad = launchpad;
      launch.rocket = rocket;

      return launch;
    },
  },
};
