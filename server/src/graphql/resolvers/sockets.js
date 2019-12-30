import { Socket } from "../../models/Socket";
import { Cpu } from "../../models/Cpu";

export const sockets = async () => {
  try {
    const sockets = await Socket.find();
    const results = sockets.map(socket => {
      const cpuArray = socket.cpuSupport.map(async cpuID => {
        return await Cpu.findById({ _id: cpuID });
      });

      return {
        ...socket._doc,
        cpuSupport: cpuArray
      };
    });
    return results;
  } catch (err) {
    throw err;
  }
};

export const createSocket = async (_, { socket }) => {
  try {
    // Check if the socket already exists
    const hasSocket = await Socket.findOne({ socket });
    console.log(hasSocket);
    if (hasSocket) {
      return new Error(`The socket ${socket} already exists in db.`);
    }

    const newSocket = new Socket({
      socket: socket,
      cpuSupport: []
    });

    const saveResult = await newSocket.save();
    return saveResult;
  } catch (err) {
    throw err;
  }
};
