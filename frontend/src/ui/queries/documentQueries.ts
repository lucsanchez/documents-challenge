import { createDocument } from "@/application/useCases/createDocument";
import { getDocuments } from "@/application/useCases/getDocuments";
import { documentApi } from "@/infraestructure/api/documentApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Document } from "@/domain/entities/Document";

export const useDocumentQueries = () => {
  const queryClient = useQueryClient();

  const { data: documents, refetch } = useQuery({
    queryKey: ["documents"],
    queryFn: () => getDocuments(documentApi)
  });

  const { mutate: addDocument } = useMutation({
    mutationFn: (document: Document) => createDocument(documentApi, document),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    }
  });

  return { documents, addDocument, refetch };
};
