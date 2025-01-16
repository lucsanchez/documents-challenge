import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

import styles from "./formImpit.module.scss";

interface FormInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  label: string;
  error?: FieldError;
  type?: string;
}

export function FormInput({
  id,
  label,
  register,
  error,
  type = "text"
}: FormInputProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...register(id)} />
      {error && <p>{error.message}</p>}
    </div>
  );
}
