export const resolvers = {
  Launchpad: {
    city: async (parent: any, args: any, context: any, info: any) => {
      return await fetch(`https://api.geodatasource.com/city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${parent.latitude}&lng=${parent.longitude}`).then((res) => res.json());
    }
  },
  Query: {
    launchpads: async (parent: any, args: any, context: any, info: any) => {
      return await fetch('https://api.spacexdata.com/v4/launchpads').then((res) => res.json());
    },
    launchpad: async (parent: any, args: any, context: any, info: any) => {
      return await fetch(`https://api.spacexdata.com/v4/launchpads/${args.id}`).then((res) => res.json());
    },
    city: async (parent: any, args: any, context: any, info: any) => {
      return await fetch(`https://api.geodatasource.com/city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${args.lat}&lng=${args.lon}`).then((res) => res.json());
    }
  },
};
