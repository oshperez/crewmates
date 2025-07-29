import teamImg from "../assets/team.svg";

function Home() {
  return (
    <>
      <h1>Welcome to Crewmates!</h1>
      <h2>The place were open source teams get created</h2>
      <img
        src={teamImg}
        alt="group of people"
        style={{ width: "100%", height: "72.5vh" }}
      ></img>
    </>
  );
}

export default Home;
