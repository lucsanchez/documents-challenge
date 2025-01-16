import { FormInput } from "../inputs/formInput";
import { AddDocumentFormType } from "./types";
import { useAddDocument } from "./useAddDocument";
import styles from "./addDocumentForm.module.scss";

interface AddDocumentFormProps {
  onSubmit: (data: AddDocumentFormType) => void;
}

export function AddDocumentForm({
  onSubmit
}: AddDocumentFormProps): JSX.Element {
  const { register, handleSubmit, errors } = useAddDocument();

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
        <label htmlFor="attachments">Attachments</label>
        <input id="attachments" type="file" {...register("attachments")} />
        {errors.attachments && <p>{errors.attachments.message}</p>}
      </div>

      <button className={styles.submitButton} type="submit">
        Submit
      </button>
    </form>
  );
}
