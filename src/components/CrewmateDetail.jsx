import { Link, useParams } from "react-router-dom";
import crewMembers from "../crewMembers.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faUserGear,
  faUserNinja,
  faClipboardCheck,
  faEye,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CrewmateDetail.module.css";

const avatarIcons = {
  faCrown,
  faUserGear,
  faUserNinja,
  faClipboardCheck,
  faEye,
};

function CrewmateDetail() {
  const { id } = useParams();
  const member = crewMembers.find((m) => m.index === parseInt(id));

  if (!member) return <p className={styles.notFound}>Crewmate not found.</p>;

  return (
    <div className={styles.detailPage}>
      <div className={styles.detailCard}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={avatarIcons[member.avatar]} size="4x" />
        </div>
        <ul className={styles.list}>
          <li>
            <span className={styles.fieldName}>Name:</span> {member.name}
          </li>
          <li>
            <span className={styles.fieldName}>Role:</span> {member.role}
          </li>
          <li>
            <span className={styles.fieldName}>Email:</span> {member.email}
          </li>
          <li>
            <span className={styles.fieldName}>Status:</span> {member.status}
          </li>
          <li>
            <span className={styles.fieldName}>Update:</span>{" "}
            <Link to={`/update/${id}`}>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.link}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CrewmateDetail;
