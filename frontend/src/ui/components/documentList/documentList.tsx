import { useDocumentsContext } from "@/ui/context/documentContext";
import { DocumentCard } from "../documentCard/documentCard";

import styles from "./documentList.module.scss";
import { useViewContext } from "@/ui/context/viewContext";
import { AddButton } from "../addButton/addButton";

export function DocumentList() {
  const { isGridView } = useViewContext();
  const { documents } = useDocumentsContext();

  return (
    <div className={styles.app}>
      {!isGridView && (
        <div className={styles.listHeaders}>
          <h3 className={styles.headerTitle}>Name</h3>
          <h3 className={styles.headerTitle}>Contributors</h3>
          <h3 className={styles.headerTitle}>Attachments</h3>
        </div>
      )}
      <div className={isGridView ? styles.gridContainer : styles.listContainer}>
        {documents.map((item) => (
          <DocumentCard key={item.id} document={item} />
        ))}
      </div>
      <AddButton />
    </div>
  );
}
