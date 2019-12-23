import { Cpu } from "./models/Cpu";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cpus: () => Cpu.find()
  },
  Mutation: {
    createCpu: async (_, { modelName }) => {
      const cpu = new Cpu({ modelName });
      await cpu.save();
      return cpu;
    }
  }
};
