import { Context } from "../../Domain/types";

export const rocketResolver = (
  parent: any,
  { id }: { id: string },
  context: Context
) => {
  return context.dataSources.SpaceX.getRocket(id);
};
