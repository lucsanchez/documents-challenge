import { Document } from "../entities/Document";

export interface DocumentRepository {
  getDocuments(): Promise<Document[]>;
  createDocument(document: Omit<Document, "id">): Promise<Document>;
}
