import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const validFileExtensions: Record<string, string> = {
  jpg: "jpg",
  png: "png",
  jpeg: "jpeg",
  svg: "svg",
  webp: "webp"
};

function isValidFileType(fileName: string) {
  const extension = fileName.split(".").pop();
  return !!extension && !!validFileExtensions[extension];
}

export const documentSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  version: yup
    .string()
    .required("Version is required")
    .matches(/^\d+\.\d+\.\d+$/, "Version format should be X.X.X"),
  attachments: yup
    .mixed<File[]>()
    .test(
      "is-valid-type",
      "Not a valid type",
      (value) =>
        value && value.every((file) => isValidFileType(file.name.toLowerCase()))
    )
    .test(
      "is-valid-size",
      "Max allowed size is 5MB",
      (value) => value && value.every((file) => file.size <= MAX_FILE_SIZE)
    )
});
