import { RESTDataSource } from "@apollo/datasource-rest";

export class SpaceXDataSource extends RESTDataSource {
  override baseURL = "https://api.spacexdata.com";

  async getLaunches() {
    const launches = await this.get("v4/launches")
    return launches;
  }

  async getLaunch(id: string) {
    return await this.get(`v4/launches/${id}`);
  }

  async getRockets() {
    return await this.get("v4/rockets");
  }

  async getRocket(id: string) {
    return await this.get(`v4/rockets/${id}`);
  }

  async getLaunchpad(id: string) {
    return await this.get(`v4/launchpads/${id}`);
  }
}
