import { Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import NewCrewmate from "./components/NewCrewmate";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/new" element={<NewCrewmate />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
