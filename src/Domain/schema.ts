export const typeDefs = `#graphql

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
    region: String!
    sunrise: String!
    sunset: String!
    country: String!
  }

  type Query {
    launchpads: [Launchpad!]!
    launchpad(id: ID!): Launchpad!
    city(lat: Float!, lon: Float!): City!
  }
`;
