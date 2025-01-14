import { DocumentRepository } from "../../domain/repositories/DocumentRepository";
import { Document } from "../../domain/entities/Document";

export const getDocuments = async (
  documentRepository: DocumentRepository
): Promise<Document[]> => {
  return await documentRepository.getDocuments();
};