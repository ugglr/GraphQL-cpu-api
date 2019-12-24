import { Cpu } from "../../models/Cpu";

export const cpus = async () => Cpu.find();

export const createCpu = async (_, { model, baseClock, cores }) => {
  try {
    const hasCpu = await Cpu.findOne({ model });
    if (hasCpu) {
      throw new Error("This cpu already exists");
    }
    const newCpu = new Cpu({
      model: model,
      baseClock: baseClock,
      cores: cores
    });

    const saveResult = await newCpu.save();
    return saveResult;
  } catch (err) {
    throw err;
  }
};
