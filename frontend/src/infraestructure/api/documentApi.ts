import { DocumentRepository } from "../../domain/repositories/DocumentRepository";
import { Document, Contributor } from "../../domain/entities/Document";
import { ApiDocumentResponse, ApiContributorResponse } from "./types";

const mapDocumentResponse = (response: ApiDocumentResponse): Document => {
  return {
    id: response.ID,
    title: response.Title,
    version: response.Version,
    created_at: response.CreatedAt,
    updated_at: response.UpdatedAt,
    attachments: response.Attachments,
    contributors: response.Contributors.map(
      (contributor: ApiContributorResponse): Contributor => ({
        id: contributor.ID,
        name: contributor.Name
      })
    )
  };
};

export const documentApi: DocumentRepository = {
  getDocuments: async (): Promise<Document[]> => {
    const response = await fetch("/api/documents");
    const data = await response.json();

    return data.map(mapDocumentResponse);
  },
  createDocument: async (document: Document): Promise<Document> => {
    const response = await fetch("/api/documents", {
      method: "POST",
      body: JSON.stringify(document),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return mapDocumentResponse(data);
  }
};
