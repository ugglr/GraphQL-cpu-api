import { Laptop } from "../../models/Laptop";
import { Cpu } from "../../models/Cpu";
import { Socket } from "../../models/Socket";

export const laptops = async () => {
  try {
    // get all the laptops from db
    let laptops = await Laptop.find();
    // loop through and get all the the cpu for each laptop
    const result = await laptops.map(async laptop => {
      // getting the cpu from db
      let cpu = await Cpu.findById({ _id: laptop.cpu });
      // get the socket for the cpu
      let socket = await Socket.findById({ _id: cpu.socket });
      // get all the supported Cpus for the socket
      let socketSupportedCpus = await socket.cpuSupport.map(async cpuID => {
        return await Cpu.findById({ _id: cpuID });
      });
      return {
        ...laptop._doc,
        cpu: {
          ...cpu._doc,
          socket: {
            ...socket._doc,
            cpuSupport: socketSupportedCpus
          }
        }
      };
    });
    return result;
  } catch (err) {
    throw err;
  }
};

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
    // get the socket for the cpu
    const socket = await Socket.findById({ _id: hasCpu.socket });
    // loop through the sockets cpuSupport array and get the cpu for each support cpu
    const cpuSupportArray = await socket.cpuSupport.map(async cpuID => {
      const result = await Cpu.findById({ _id: cpuID });
      return result;
    });
    // Save Laptop to DB
    let saveResult = await newLaptop.save();
    // Return the result of the save
    return {
      ...saveResult._doc,
      cpu: {
        ...hasCpu._doc,
        socket: {
          ...socket._doc,
          cpuSupport: cpuSupportArray
        }
      }
    };
  } catch (err) {
    throw err;
  }
};
