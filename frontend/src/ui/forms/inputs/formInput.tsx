import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister
} from "react-hook-form";

import styles from "./formImpit.module.scss";

interface FormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  error?: FieldError;
  type?: string;
}

export function FormInput<T extends FieldValues>({
  name,
  label,
  register,
  error,
  type = "text"
}: FormInputProps<T>) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
      {error && <p>{error.message}</p>}
    </div>
  );
}
