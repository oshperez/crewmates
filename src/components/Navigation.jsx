import { Link } from "react-router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};

export default Navigation;
