// CPU Related resolvers
import { createCpu, cpus } from "./cpus";
// User Related resolvers
import { createUser, users, findUserByEmail } from "./users";

export const resolvers = {
  Query: { cpus, users, findUserByEmail },
  Mutation: { createCpu, createUser }
};
