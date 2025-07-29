import Form from "./Form";
import userImg from "../assets/user.svg";
import { useParams } from "react-router-dom";
import crewMembers from "../crewMembers.json";

function ManageCrewmate({ children }) {
  const { id } = useParams();
  const member = crewMembers.find((m) => m.index === parseInt(id));
  console.log({ id });
  return (
    <>
      <h1 style={{ marginBottom: 0 }}>{children}</h1>
      <img src={userImg} style={{ width: "250px" }} />
      <Form member={member} />
    </>
  );
}

export default ManageCrewmate;
