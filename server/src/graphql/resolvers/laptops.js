import { Laptop } from "../../models/Laptop";
import { Cpu } from "../../models/Cpu";

export const laptops = async () => Laptop.find();

export const createLaptop = async (_, { model, cpuModel }) => {
  try {
    // Check if the Laptop-model exists in the DB
    const hasLaptop = await Laptop.findOne({ model: model });
    if (hasLaptop) {
      throw new Error(`The laptop model already exists in the DB. (${model})`);
    }
    // Check if the CPU-model exists in the DB
    const hasCpu = await Cpu.findOne({ model: cpuModel });
    if (!hasCpu) {
      throw new Error(
        `The cpu does not exist in DB, please add it first. (${cpuModel})`
      );
    }
    // if CPU exists in DB, create new Laptop
    const newLaptop = new Laptop({
      model: model,
      cpu: hasCpu
    });
    // Save Laptop to DB
    const saveResult = await newLaptop.save();
    // Return the result of the save
    return saveResult;
  } catch (err) {
    throw err;
  }
};
