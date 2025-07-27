import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

export const Layout = () => {
  return (
    <div className={styles.layoutGrid}>
      <Navigation />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};
