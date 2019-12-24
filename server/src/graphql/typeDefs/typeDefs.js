import { gql } from "apollo-server-express";

export const typeDefs = gql`
  #Queries
  type Query {
    # Return all CPUs in the database
    cpus: [Cpu!]!
    users: [User]!
    findUserByEmail(email: String!): User!
  }
  # Mutations
  type Mutation {
    # Adds CPU to db with the given model identifier
    ## Adds the baseClock in GHz
    ## Adds cores as an Int
    createCpu(model: String!, baseClock: Float!, cores: Int!): Cpu!
    # Adds a User to db with the given email and password
    createUser(email: String!, password: String!): User!
  }
  # CPU type
  type Cpu {
    #ID
    id: ID!
    model: String!
    baseClock: Float!
    cores: Int!
  }
  #User type
  type User {
    id: ID!
    email: String!
    password: String
  }
`;
