import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const getClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <div className={styles.navigation}>
      <NavLink to="/" end className={getClass}>
        Home
      </NavLink>
      <NavLink to="/new" className={getClass}>
        New
      </NavLink>
      <NavLink to="/gallery" className={getClass}>
        Gallery
      </NavLink>
    </div>
  );
};

export default Navigation;
