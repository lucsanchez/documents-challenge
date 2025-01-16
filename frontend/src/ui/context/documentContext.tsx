import { Document } from "@/domain/entities/Document";
import { createContext, useContext } from "react";

interface DocumentContextType {
  documents: Document[];
  sortBy: "name" | "version" | "date";
  addDocument: (doc: Document) => void;
  sortDocuments: (criteria: "name" | "version" | "date") => void;
}

export const DocumentContext = createContext<DocumentContextType | undefined>(
  undefined
);

export const useDocumentsContext = () => {
  const context = useContext(DocumentContext);
  if (!context) {
    throw new Error("useViewContext must be used within a ViewProvider");
  }
  return context;
};
