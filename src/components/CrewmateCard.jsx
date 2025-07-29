import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faUserGear,
  faUserNinja,
  faClipboardCheck,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CrewmateCard.module.css";
import { useNavigate } from "react-router-dom";

const roleIcons = {
  faCrown: faCrown,
  faUserGear: faUserGear,
  faUserNinja: faUserNinja,
  faClipboardCheck: faClipboardCheck,
  faEye: faEye,
};

function CrewmateCard({ name, email, role, status, avatar, index, onClick }) {
  const icon = roleIcons[role] || faUserNinja;
  const statusClass = styles[status.toLowerCase()] || styles.inactive;
  const navigate = useNavigate();

  const handleClick = (index, e) => {
    e.stopPropagation();
    navigate(`/update/${index}`);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={roleIcons[avatar]} />
        </div>
        <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.roleBadge}>
          <p className={styles.role}>{role}</p>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.email}>{email}</p>
        <button
          className={styles.button}
          onClick={(e) => handleClick(index, e)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default CrewmateCard;
