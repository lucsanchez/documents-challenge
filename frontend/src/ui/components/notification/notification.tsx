import styles from "./notification.module.scss";

interface NotificationProps {
  count: number;
  message: string;
}

export function Notification({ count, message }: NotificationProps) {
  return (
    <div className={styles.notificationContainer}>
      <div className={styles.iconWrapper}>
        <span className={styles.notificationCount}>{count}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.bellIcon}
        >
          <path
            d="M12 24a2.5 2.5 0 002.5-2.5h-5A2.5 2.5 0 0012 24zm6.36-6.36A1.25 1.25 0 0019 16.75V11a7 7 0 10-14 0v5.75a1.25 1.25 0 00.64 1.11L7 18h10zM12 4a5 5 0 015 5v5.75l.92.92H6.08l.92-.92V9a5 5 0 015-5z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className={styles.message}>{message}</span>
    </div>
  );
}
