import { useDocumentsContext } from "@/ui/context/documentContext";
import { AddDocumentForm } from "@/ui/forms/document/addDocumentForm";
import { AddDocumentFormType } from "@/ui/forms/document/types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function AddDocumentPage() {
  const { addDocument } = useDocumentsContext();
  const navigate = useNavigate();
  const onSubmit = (values: AddDocumentFormType) => {
    const filesNames = values.attachments
      ? Array.from(values.attachments).map((file: File) => file.name)
      : [];
    const formData = {
      ...values,
      attachments: filesNames,
      id: uuidv4(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      contributors: []
    };
    try {
      addDocument(formData);
      navigate("/");
    } catch (error) {
      alert("Error adding document");
      console.log(error);
    }
  };

  return <AddDocumentForm onSubmit={onSubmit} />;
}
