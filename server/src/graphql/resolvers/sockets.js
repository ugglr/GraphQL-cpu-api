import { Socket } from "../../models/Socket";

export const sockets = async () => Socket.find();

export const createSocket = async (_, socket) => {
  return console.log("Hello");
};
