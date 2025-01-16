import { ReactNode, useEffect, useMemo, useState } from "react";
import { compareVersions } from "../utils/orderBy";
import { Document } from "@/domain/entities/Document";
import { DocumentContext } from "../context/documentContext";
import { useDocumentQueries } from "../queries/documentQueries";

interface DocumentsProviderProps {
  children: ReactNode;
}

export const DocumentsProvider: React.FC<DocumentsProviderProps> = ({
  children
}) => {
  const { documents: initialDocuments } = useDocumentQueries();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [sortBy, setSortBy] = useState<"name" | "version" | "date">("name");

  useEffect(() => {
    if (initialDocuments) {
      setDocuments(initialDocuments);
    }
  }, [initialDocuments]);

  const addDocument = (doc: Document) => {
    setDocuments((prev) => [...prev, doc]);
  };

  const sortDocuments = (criteria: "name" | "version" | "date") => {
    setSortBy(criteria);
  };

  const sortedDocuments = useMemo(() => {
    return [...documents].sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "version") return compareVersions(a.version, b.version);
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });
  }, [documents, sortBy]);

  return (
    <DocumentContext.Provider
      value={{ documents: sortedDocuments, addDocument, sortDocuments, sortBy }}
    >
      {children}
    </DocumentContext.Provider>
  );
};
