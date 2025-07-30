import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navigation from "./Navigation";
import styles from "./Layout.module.css";

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
