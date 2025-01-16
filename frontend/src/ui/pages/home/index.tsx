import { DocumentList } from "@/ui/components/documentList/documentList";
import { IconButton } from "@/ui/components/iconButton/iconButton";
import { useViewContext } from "@/ui/context/viewContext";
import { GridIcon } from "@/ui/icons/gridIcon";
import { ListIcon } from "@/ui/icons/listIcon";
import { useEffect } from "react";

import styles from "./index.module.scss";
import { listenToNewDocuments } from "@/services/socketService";
import { useDocuments } from "@/ui/context/documentContext";
import { SortByDropdown } from "@/ui/components/sortByDropdown/sortByDropdown";

export const HomePage = () => {
  const { isGridView, toggleGridView, toggleListView } = useViewContext();
  const { addDocument, sortDocuments, sortBy } = useDocuments();

  useEffect(() => {
    listenToNewDocuments((newDoc) => {
      addDocument(newDoc);
    });
  }, [addDocument]);

  return (
    <div>
      <h1>Documents</h1>

      <div className={styles.container}>
        <SortByDropdown sortBy={sortBy} onChange={sortDocuments} />
        <div>
          <IconButton ariaLabel="grid" onClick={toggleGridView}>
            <GridIcon isActive={isGridView} />
          </IconButton>
          <IconButton ariaLabel="list" onClick={toggleListView}>
            <ListIcon isActive={!isGridView} />
          </IconButton>
        </div>
      </div>

      <DocumentList />
    </div>
  );
};
