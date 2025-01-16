import { UseFormRegister } from "react-hook-form";

export type FormProps<T> = {
  register: UseFormRegister<T>;
};
