import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles);
  return (
    <div className={styles.navigation}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/new" className={styles.navLink}>
        New
      </Link>
      <Link to="/gallery" className={styles.navLink}>
        Gallery
      </Link>
    </div>
  );
};

export default Navigation;
