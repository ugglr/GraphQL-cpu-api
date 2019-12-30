import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const socketSchema = new mongoose.Schema({
  socket: {
    type: String,
    required: true
  },
  cpuSupport: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cpu"
    }
  ]
});

export const Socket = mongoose.model("Socket", socketSchema);
