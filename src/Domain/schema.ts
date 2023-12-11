export const typeDefs = `#graphql

  type Launch {
    id: ID!
    name: String!
    date_utc: String!
    flight_number: Int!
    success: Boolean!
    rocket: Rocket!
    launchpad: Launchpad!
  }

  type Rocket {
    id: ID!
    name: String!
    type: String!
    description: String
  }

  type Launchpad {
    id: ID!
    name: String!
    latitude: Float!
    longitude: Float!
    details: String
    city: City!
  }

  type City {
    city: String!
    country: String!
    region: String!
    sunrise: String!
    sunset: String!
  }

  type Query {
    launch(id: ID!): Launch!
    rocket(id: ID!): Rocket!
    launchpad(id: ID!): Launchpad!
  }
`;
