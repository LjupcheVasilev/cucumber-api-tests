import { RESTDataSource } from "@apollo/datasource-rest";

export class GeoDataSource extends RESTDataSource {
  override baseURL = "https://api.geodatasource.com";

  async getCity(lat: string, lng: string) {
    return this.get(
      `city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${lat}&lng=${lng}`
    );
  }
}
