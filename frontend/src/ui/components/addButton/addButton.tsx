import { useViewContext } from "@/ui/context/viewContext";
import { useNavigate } from "react-router-dom";
import styles from "./addButton.module.scss";
import clsx from "clsx";

export function AddButton() {
  const navigate = useNavigate();
  const { isGridView } = useViewContext();

  const handleOnClickNewDocument = () => {
    navigate("/add-document");
  };

  const containerClasses = clsx(styles.buttonContainer, {
    [styles.gridView]: isGridView
  });

  return (
    <div className={containerClasses}>
      <button className={styles.button} onClick={handleOnClickNewDocument}>
        + Add Document
      </button>
    </div>
  );
}
