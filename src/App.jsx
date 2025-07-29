import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import ManageCrewmate from "./components/ManageCrewmate";
import Gallery from "./components/Gallery";
import CrewmateDetail from "./components/CrewmateDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/new"
            element={<ManageCrewmate>New Crewmate</ManageCrewmate>}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details/:id" element={<CrewmateDetail />} />
          <Route
            path="/update/:id"
            element={<ManageCrewmate>Update Crewmate</ManageCrewmate>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
