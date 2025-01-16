import { Document } from "@/domain/entities/Document";
import { io } from "socket.io-client";

const socketURL = import.meta.env.VITE_NOTIFICATION_BACKEND_URL;

const socket = io(socketURL);

export const listenToNewDocuments = (callback: (doc: Document) => void) => {
  socket.on("newDocument", callback);
};

export const notifyNewDocument = (doc: Document) => {
  socket.emit("newDocument", doc);
};
