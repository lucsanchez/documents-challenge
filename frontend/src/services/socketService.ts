import { Document } from "@/domain/entities/Document";
import { io } from "socket.io-client";
import { DocumentNotification } from "./types";

const socketURL = import.meta.env.VITE_NOTIFICATION_BACKEND_URL;

export const socket = io(socketURL, {
  autoConnect: true,
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log("Connected to socket server");
});

export const listenToNewDocuments = (
  callback: (notification: DocumentNotification) => void
) => {
  socket.on("newDocument", callback);
};

export const notifyNewDocument = (doc: Document) => {
  socket.emit("newDocument", doc);
};
