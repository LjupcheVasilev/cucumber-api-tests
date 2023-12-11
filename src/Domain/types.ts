export type Launch = {
    id: string;
    name: string;
    date_utc: string;
    flight_number: number;
    success: boolean;
    rocket?: Rocket;
    launchpad?: Launchpad;
  };
  
  export type Rocket = {
    id: string;
    name: string;
    type: string;
    description: string;
  };
  
  export type Launchpad = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    details: string;
    city: City;
  };
  
  export type City = {
    city: string;
    country: string;
    region: string;
    sunrise: string;
    sunset: string;
  };