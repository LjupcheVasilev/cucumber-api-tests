export const typeDefs = `#graphql
  type Launch {
    rocket: String,
    success: Boolean,
    details: String,
    crew: [String],
    ships: [String],
    capsules: [String],
    payloads: [String],
    launchpad: String,
    flight_number: Int,
    name: String,
    date_utc: String,
    upcoming: Boolean
    id: String
  }

  type Rocket {
    flickr_images: [String],
    name: String,
    type: String,
    id: String
    active: Boolean,
    stages: Int,
    boosters: Int,
    success_rate_pct: Int,
    first_flight: String,
    country: String,
    company: String,
    wikipedia: String,
    description: String,
    cost_per_launch: Int,
  }

  type CityLookup {
    city: String
    region: String
    country: String
    currency_name: String
  }

  type Query {
    launches: [Launch]
    launch(id: String): Launch
    rockets: [Rocket]
    rocket(id: String): Rocket
    city(lat: Float, lng: Float): CityLookup
  }
`;
