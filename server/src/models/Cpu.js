import mongoose from "mongoose";

const cpuSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  baseClock: {
    type: Number,
    required: true
  },
  cores: {
    type: Number,
    required: true
  }
});

export const Cpu = mongoose.model("Cpu", cpuSchema);
