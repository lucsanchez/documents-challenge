import { useDropzone } from "react-dropzone";
import styles from "./dropzone.module.scss";

interface FileDropzoneProps {
  onDrop: (files: File[]) => void;
  attachments: File[];
  error?: string;
}

export function FileDropzone({
  onDrop,
  attachments,
  error
}: FileDropzoneProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg": [".svg"],
      "image/webp": [".webp"]
    },
    multiple: true
  });

  return (
    <div className={styles.dropzoneContainer}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <p>Drag and drop files here, or click to select files</p>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.attachmentList}>
        {attachments.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
