import CrewmateCard from "./CrewmateCard";
import crewMembers from "../crewMembers.json";
import styles from "./Gallery.module.css";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
  const handleClick = (index) => {
    navigate(`/details/${index}`);
  };
  return (
    <>
      <h1>Gallery</h1>
      <div className={styles.gridContainer}>
        {crewMembers.map((member, index) => (
          <CrewmateCard
            onClick={() => handleClick(member.index)}
            key={index}
            name={member.name}
            email={member.email}
            role={member.role}
            status={member.status}
            avatar={member.avatar}
            index={member.index}
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
