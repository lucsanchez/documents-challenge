import { documentSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddDocumentFormType } from "./types";

export const useAddDocument = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddDocumentFormType>({
    resolver: yupResolver(documentSchema)
  });

  return { register, handleSubmit, control, errors };
};
