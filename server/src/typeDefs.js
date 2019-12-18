const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        cpus: [Cpu]!
    }
    type Mutation {}

    type Cpu {
        id: ID!
        model: String!
    }

`;

module.exports = typeDefs;
