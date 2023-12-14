import { Context } from "../../Domain/types";

export const cityResolver = (
  parent: any,
  { lat, lng }: { lat: string; lng: string },
  context: Context
) => {
  return context.dataSources.GeoDataSource.getCity(lat, lng);
};
