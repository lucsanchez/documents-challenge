import { FormInput } from "../inputs/formInput";
import { AddDocumentFormType } from "./types";
import { useAddDocument } from "./useAddDocument";
import styles from "./addDocumentForm.module.scss";
import { Controller } from "react-hook-form";
import { FileDropzone } from "@/ui/components/dropzone/dropzone";

interface AddDocumentFormProps {
  onSubmit: (data: AddDocumentFormType) => void;
}

export function AddDocumentForm({
  onSubmit
}: AddDocumentFormProps): JSX.Element {
  const { register, handleSubmit, isValid, errors, control } = useAddDocument();

  const handleFormSubmit = (data: AddDocumentFormType) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.formContainer}
    >
      <FormInput
        id="title"
        label="Title"
        register={register}
        error={errors.title}
      />
      <FormInput
        id="version"
        label="Version"
        register={register}
        error={errors.version}
      />
      <div>
        <Controller
          name="attachments"
          control={control}
          render={({ field }) => (
            <FileDropzone
              onDrop={(acceptedFiles) => {
                field.onChange([...(field.value || []), ...acceptedFiles]); // Agregar nuevos archivos
              }}
              attachments={field.value || []}
            />
          )}
        />
      </div>

      <button disabled={!isValid} className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}
