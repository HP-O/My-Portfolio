import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Resume from "./Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
