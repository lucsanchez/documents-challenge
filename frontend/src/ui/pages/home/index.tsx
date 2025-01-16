import { useEffect, useState } from "react";

import { DocumentList } from "@/ui/components/documentList/documentList";
import { IconButton } from "@/ui/components/iconButton/iconButton";
import { useViewContext } from "@/ui/context/viewContext";
import { GridIcon } from "@/ui/icons/gridIcon";
import { ListIcon } from "@/ui/icons/listIcon";
import { listenToNewDocuments } from "@/services/socketService";
import { useDocuments } from "@/ui/context/documentContext";
import { socket } from "@/services/socketService";
import { SortByDropdown } from "@/ui/components/sortByDropdown/sortByDropdown";

import styles from "./index.module.scss";
import { Notification } from "@/ui/components/notification/notification";

export const HomePage = () => {
  const { isGridView, toggleGridView, toggleListView } = useViewContext();
  const { sortDocuments, sortBy } = useDocuments();
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleNewDocument = () => {
      setShowNotification(true);
    };

    listenToNewDocuments(handleNewDocument);

    return () => {
      socket.off("newDocument", handleNewDocument);
    };
  }, []);

  return (
    <div>
      {showNotification && (
        <Notification count={2} message="New notification added" />
      )}
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
