import Form from "./Form";
import userImg from "../assets/user.svg";
import { useParams } from "react-router-dom";

function ManageCrewmate({ children, crewMembers }) {
  const { id } = useParams();
  const member =
    (id && crewMembers?.find((m) => m.id === parseInt(id))) || null;

  return (
    <>
      <h1 style={{ marginBottom: 0 }}>{children}</h1>
      <img src={userImg} style={{ width: "250px" }} />
      <Form member={member} />
    </>
  );
}

export default ManageCrewmate;
