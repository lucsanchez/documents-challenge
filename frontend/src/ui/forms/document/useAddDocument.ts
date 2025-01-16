import { documentSchema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AddDocumentFormType } from "./types";

export const useAddDocument = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<AddDocumentFormType>({
    resolver: yupResolver(documentSchema),
    mode: "onBlur"
  });

  return { register, handleSubmit, control, errors, isValid };
};
