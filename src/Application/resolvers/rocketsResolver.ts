import { Context } from "../../Domain/types";

export const rocketsResolver = (parent: any, args: any, context: Context) => {
  return context.dataSources.SpaceX.getRockets();
};
