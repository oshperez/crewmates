import CrewmateCard from "./CrewmateCard";
import styles from "./Gallery.module.css";
import { useNavigate } from "react-router-dom";

function Gallery({ crewMembers }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      <h1>Gallery</h1>
      {!crewMembers ? (
        <p>Not crewmates to show</p>
      ) : (
        <div className={styles.gridContainer}>
          {crewMembers.map((member, index) => (
            <CrewmateCard
              onClick={() => handleClick(member.id)}
              key={index}
              name={member.name}
              email={member.email}
              role={member.role}
              isActive={member.isActive}
              avatar={member.avatar}
              id={member.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Gallery;
