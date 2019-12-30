import mongoose from "mongoose";

const Schema = mongoose.Schema;

const laptopSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  cpu: {
    type: Schema.Types.ObjectId,
    red: "Cpu"
  }
});

export const Laptop = mongoose.model("Laptop", laptopSchema);
