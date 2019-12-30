import { Cpu } from "../../models/Cpu";
import { Socket } from "../../models/Socket";

export const cpus = async () => {
  try {
    const cpus = await Cpu.find();
    const result = cpus.map(async cpu => {
      // find the sockets
      const socket = await Socket.findById({ _id: cpu.socket });

      // Get all the cpus for the socket
      const socketSupportArray = socket.cpuSupport.map(async cpuID => {
        return await Cpu.findById({ _id: cpuID });
      });
      return {
        ...cpu._doc,
        socket: {
          ...socket._doc,
          cpuSupport: socketSupportArray
        }
      };
    });
    return result;
  } catch (err) {
    throw err;
  }
};

export const getCpuById = async (_, { _id }) => {
  try {
    const hasCpu = await Cpu.findById({ _id });
    if (!hasCpu) {
      return new Error(`The CPU-id: ${_id} does not exist`);
    }
    return hasCpu;
  } catch (err) {
    throw err;
  }
};

export const createCpu = async (_, { model, baseClock, cores, socket }) => {
  try {
    // Check if the CPU exist in the db
    // it should not exist
    const hasCpu = await Cpu.findOne({ model });
    if (hasCpu) {
      throw new Error("This cpu already exists");
    }
    // Check if the socket exist
    // it should exist
    const hasSocket = await Socket.findOne({ socket });
    if (!hasSocket) {
      throw new Error("There's no socket with that name, please add it first");
    }

    //Create the new CPU
    const newCpu = new Cpu({
      model: model,
      baseClock: baseClock,
      cores: cores,
      socket: hasSocket
    });

    // Update the socket cpuSupport array
    const newSupportArray = hasSocket.cpuSupport;
    await newSupportArray.push(newCpu._id);
    hasSocket.cpuSupport = newSupportArray;

    // Save to DB
    await hasSocket.save();
    const saveResult = await newCpu.save();
    return saveResult;
  } catch (err) {
    throw err;
  }
};
