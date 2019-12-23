import mongoose from "mongoose";

export const Cpu = mongoose.model("Cpu", { modelNumber: String });
