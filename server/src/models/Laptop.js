import mongoose from "mongoose";
import { cpuSchema } from "./Cpu";

const laptopSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  cpu: cpuSchema
});

export const Laptop = mongoose.model("Laptop", laptopSchema);
