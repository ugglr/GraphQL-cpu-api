import { gql } from "apollo-server-express";

export const typeDefs = gql`
  #Queries
  type Query {
    ###### LAPTOP RELATED QUERIES #######
    # Return all Laptops in the database
    laptops: [Laptop!]!

    ###### CPU RELATED QUERIES ##########
    # Return all CPUs in the database
    cpus: [Cpu!]!
    # Get CPU by id
    getCpuById(_id: ID!): Cpu!

    ###### SOCKET RELATED QUERIES #######
    sockets: [Socket!]!

    ###### USER RELATED QUERIES #########
    users: [User]!
    findUserByEmail(email: String!): User!
  }
  # Mutations
  type Mutation {
    # Adds CPU to db with the given model identifier
    ## Adds the baseClock in GHz
    ## Adds cores as an Int
    createCpu(model: String!, baseClock: Float!, cores: Int!): Cpu!

    # Adds socket with the given socket
    createSocket(socket: String!): Socket!

    # Adds Laptop with the given model and CPU-model.
    createLaptop(model: String!, cpuModel: String!): Laptop!

    # Adds a User to db with the given email and password
    createUser(email: String!, password: String!): User!
  }
  # CPU type
  type Cpu {
    #ID
    _id: ID!
    model: String!
    baseClock: Float!
    cores: Int!
  }
  # Socket
  type Socket {
    _id: ID!
    socket: String!
    cpuSupport: [Cpu!]!
  }
  #Laptop
  type Laptop {
    _id: ID!
    model: String!
    cpu: Cpu!
  }
  #User type
  type User {
    _id: ID!
    email: String!
    password: String
  }
`;
