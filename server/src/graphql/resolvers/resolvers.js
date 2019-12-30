// CPU Related resolvers
import { createCpu, getCpuById, cpus } from "./cpus";
// Laptop Related resolvers
import { createLaptop, laptops } from "./laptops";
// User Related resolvers
import { createUser, users, findUserByEmail } from "./users";

export const resolvers = {
  Query: { laptops, cpus, getCpuById, users, findUserByEmail },
  Mutation: { createLaptop, createCpu, createUser }
};
