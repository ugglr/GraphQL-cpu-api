import { createCpu, cpus } from "./cpus";

export const resolvers = {
  Query: { cpus },
  Mutation: { createCpu }
};
