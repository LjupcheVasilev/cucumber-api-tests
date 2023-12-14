import { Context } from "../../Domain/types";

export const launchesResolver = (parent: any, args: any, context: Context) => {
  return context.dataSources.SpaceX.getLaunches();
};
