import { DocumentRepository } from "../../domain/repositories/DocumentRepository";
import { Document } from "../../domain/entities/Document";

export const createDocument = async (
  documentRepository: DocumentRepository,
  document: Document
): Promise<Document> => {
  return await documentRepository.createDocument(document);
};
