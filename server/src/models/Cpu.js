import mongoose from "mongoose";

const cpuSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  }
});

export const Cpu = mongoose.model("Cpu", cpuSchema);
