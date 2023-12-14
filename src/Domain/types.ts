import { GeoDataSource } from "../Infrastructure/GeoDataSource/GeoDataSource";
import { SpaceXDataSource } from "../Infrastructure/SpaceX/SpaceXDataSource";

export type Context = {
  dataSources: {
    SpaceX: SpaceXDataSource;
    GeoDataSource: GeoDataSource;
  };
};
