import { gql } from "apollo-server-express";

export const typeDefs = gql`
  #Queries
  type Query {
    # Return all CPUs in the database
    cpus: [Cpu!]!
  }
  # Mutations
  type Mutation {
    # Adds CPU to db with the given model identifier
    createCpu(model: String!): Cpu!
  }
  # CPU type
  type Cpu {
    id: ID!
    model: String!
  }
`;
