import { Document } from "@/domain/entities/Document";
import { useViewContext } from "@/ui/context/viewContext";

import styles from "./documentCard.module.scss";

import clsx from "clsx";
import { formatDateToDaysAgo } from "@/ui/utils/dateUtils";

interface DocumentCardProps {
  document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const { isGridView } = useViewContext();

  const cardClasses = clsx(styles.card, { [styles.column]: isGridView });
  return (
    <div className={cardClasses}>
      <div className={styles.container}>
        <h3>{document.title}</h3>
        <p>Version {document.version}</p>
      </div>
      <div className={styles.container}>
        {document.contributors?.map((contributor) => (
          <p key={`${document.id} ${contributor.id}`}>{contributor.name}</p>
        ))}
      </div>

      <div className={styles.container}>
        {document.attachments?.map((attachment) => (
          <p key={attachment}>{attachment}</p>
        ))}
      </div>
      <p className={styles.extraInformation}>
        Updated: {formatDateToDaysAgo(document.updated_at)}
      </p>
    </div>
  );
}
