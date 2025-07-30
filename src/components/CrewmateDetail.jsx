import { Link, useParams } from "react-router-dom";
import crewMembers from "../crewMembers.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CrewmateDetail.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import roleIcons from "../util/roleIcons";

function CrewmateDetail({ crewMembers }) {
  const { id } = useParams();
  const member = crewMembers.find((m) => m.id === parseInt(id));

  if (!member) return <p className={styles.notFound}>Crewmate not found.</p>;

  return (
    <div className={styles.detailPage}>
      <div className={styles.detailCard}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={roleIcons[member.role]} size="4x" />
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
            <span className={styles.fieldName}>Status:</span>{" "}
            {member.isActive ? "Active" : "Inactive"}
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
