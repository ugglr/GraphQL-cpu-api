import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cpus: [Cpu!]!
  }
  type Cpu {
    id: ID!
    modelName: String!
  }
  type Mutation {
    createCpu(modelName: String!): Cpu!
  }
`;
