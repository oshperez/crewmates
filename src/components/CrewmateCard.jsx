import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import roleIcons from "../util/roleIcons";
import styles from "./CrewmateCard.module.css";

function CrewmateCard({ name, role, isActive, id, onClick }) {
  const icon = roleIcons[role] || faUserNinja;
  const statusClass = isActive ? styles.active : styles.inactive;
  const navigate = useNavigate();

  const handleClick = (id, e) => {
    e.stopPropagation();
    navigate(`/update/${id}`);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <span className={`${styles.statusBadge} ${statusClass}`}>
          {isActive ? "active" : "inactive"}
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.roleBadge}>
          <p className={styles.role}>{role}</p>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <button className={styles.button} onClick={(e) => handleClick(id, e)}>
          Update
        </button>
      </div>
    </div>
  );
}

export default CrewmateCard;
