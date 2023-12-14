import { Context } from "../../Domain/types";

export const launchResolver = (
  parent: any,
  { id }: { id: string },
  context: Context
) => {
  return context.dataSources.SpaceX.getLaunch(id);
};
