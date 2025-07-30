import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.layoutGrid}>
        <Navigation />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
