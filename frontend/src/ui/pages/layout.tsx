import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <div>HEADER</div>
      <div className={styles.main_content}>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};
