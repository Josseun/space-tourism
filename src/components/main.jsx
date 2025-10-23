import React from "react";
import { Route, Routes } from "react-router-dom";
import Destination from "./destination.jsx";
import Home from "./Home";
import Crew from "./crew.jsx";
import Technology from "./technology.jsx";

function Main() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default Main;
