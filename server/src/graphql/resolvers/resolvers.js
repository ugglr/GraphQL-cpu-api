// CPU Related resolvers
import { createCpu, getCpuById, cpus } from "./cpus";
// Socket Related resolvers
import { createSocket, sockets } from "./sockets";
// Laptop Related resolvers
import { createLaptop, laptops } from "./laptops";
// User Related resolvers
import { createUser, users, findUserByEmail } from "./users";

export const resolvers = {
  Query: { laptops, cpus, getCpuById, sockets, users, findUserByEmail },
  Mutation: { createLaptop, createCpu, createSocket, createUser }
};
