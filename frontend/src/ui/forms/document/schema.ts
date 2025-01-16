import * as yup from "yup";

const MAX_FILE_SIZE = 102400;
const validFileExtensions: Record<string, string> = {
  jpg: "jpg",
  gif: "gif",
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
  version: yup.string().required("Version is required"),
  attachments: yup
    .mixed<FileList>()
    .test(
      "is-valid-type",
      "Not a valid type",
      (value) =>
        value &&
        Array.from(value).every((file) =>
          isValidFileType(file.name.toLowerCase())
        )
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) =>
        value && Array.from(value).every((file) => file.size <= MAX_FILE_SIZE)
    )
});
