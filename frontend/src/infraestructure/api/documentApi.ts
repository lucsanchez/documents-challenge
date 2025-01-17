import { DocumentRepository } from "../../domain/repositories/DocumentRepository";
import { Document, Contributor } from "../../domain/entities/Document";
import { ApiDocumentResponse, ApiContributorResponse } from "./types";
import { fetchWithHandling } from "@/utils/fetchUtils";

const DOCUMENT_API_URL = import.meta.env.VITE_DOCUMENTS_BACKEND_URL;

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
    const data = await fetchWithHandling<ApiDocumentResponse[]>(
      DOCUMENT_API_URL
    );
    return data.map(mapDocumentResponse);
  },
  createDocument: async (document: Document): Promise<Document> => {
    const data = await fetchWithHandling<ApiDocumentResponse>(
      DOCUMENT_API_URL,
      {
        method: "POST",
        body: JSON.stringify(document),
        headers: { "Content-Type": "application/json" }
      }
    );
    return mapDocumentResponse(data);
  }
};
