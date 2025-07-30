import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import ManageCrewmate from "./components/ManageCrewmate";
import Gallery from "./components/Gallery";
import CrewmateDetail from "./components/CrewmateDetail";
import supabase from "./config/supabaseClient";
import toast from "react-hot-toast";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [crewMembers, setCrewMembers] = useState(null);

  const fetchCrewMembers = async () => {
    const { data, error } = await supabase.from("crew_members").select();

    console.log({ data });
    console.log({ error });
    if (error) {
      setFetchError("Could not fetch crew members");
      setCrewMembers(null);
      toast.error(fetchError);
    }

    if (data) {
      setCrewMembers(data);
      setFetchError(null);
    }
  };

  useEffect(() => {
    fetchCrewMembers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/new"
          element={
            <ManageCrewmate refreshCrew={fetchCrewMembers}>
              Add New Crewmate
            </ManageCrewmate>
          }
        />
        <Route
          path="/gallery"
          element={
            crewMembers ? (
              <Gallery crewMembers={crewMembers} />
            ) : (
              <p>Loading crew members...</p>
            )
          }
        />
        <Route
          path="/details/:id"
          element={
            crewMembers ? (
              <CrewmateDetail crewMembers={crewMembers} />
            ) : (
              <p>Loading details...</p>
            )
          }
        />
        <Route
          path="/update/:id"
          element={
            <ManageCrewmate
              crewMembers={crewMembers}
              refreshCrew={fetchCrewMembers}
            >
              Update Crewmate
            </ManageCrewmate>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
