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

const FILE_SIZE_ERROR_MESSAGE = "Max allowed size is 5MB";
const FILE_TYPE_ERROR_MESSAGE = "Not a valid type";
const VERSION_FORMAT_ERROR_MESSAGE = "Version format should be X.X.X";
const TITLE_REQUIRED_ERROR_MESSAGE = "Title is required";
const VERSION_REQUIRED_ERROR_MESSAGE = "Version is required";

export const documentSchema = yup.object().shape({
  title: yup.string().required(TITLE_REQUIRED_ERROR_MESSAGE),
  version: yup
    .string()
    .required(VERSION_REQUIRED_ERROR_MESSAGE)
    .matches(/^\d+\.\d+\.\d+$/, VERSION_FORMAT_ERROR_MESSAGE),
  attachments: yup
    .mixed<File[]>()
    .test("is-valid-type", FILE_TYPE_ERROR_MESSAGE, (value) =>
      value
        ? value.every((file) => isValidFileType(file.name.toLowerCase()))
        : true
    )
    .test("is-valid-size", FILE_SIZE_ERROR_MESSAGE, (value) =>
      value ? value.every((file) => file.size <= MAX_FILE_SIZE) : true
    )
});
