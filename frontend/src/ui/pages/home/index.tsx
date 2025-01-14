import { getDocuments } from "@/application/useCases/getDocuments";
import { Document } from "@/domain/entities/Document";
import { documentApi } from "@/infraestructure/api/documentApi";
import { DocumentList } from "@/ui/components/documentList/documentList";
import { IconButton } from "@/ui/components/iconButton/iconButton";
import { useViewContext } from "@/ui/context/viewContext";
import { GridIcon } from "@/ui/icons/gridIcon";
import { ListIcon } from "@/ui/icons/listIcon";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";

export const HomePage = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const { isGridView, toggleGridView, toggleListView } = useViewContext();

  useEffect(() => {
    const fetchDocuments = async () => {
      const docs = await getDocuments(documentApi);
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <div className={styles.gridView}>
        <IconButton ariaLabel="grid" onClick={toggleGridView}>
          <GridIcon isActive={isGridView} />
        </IconButton>
        <IconButton ariaLabel="list" onClick={toggleListView}>
          <ListIcon isActive={!isGridView} />
        </IconButton>
      </div>

      <DocumentList documents={documents} />
    </div>
  );
};
