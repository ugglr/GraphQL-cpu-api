import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const cpuSchema = new mongoose.Schema({
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
  },
  socket: {
    type: Schema.Types.ObjectId,
    ref: "Socket"
  }
});

export const Cpu = mongoose.model("Cpu", cpuSchema);
