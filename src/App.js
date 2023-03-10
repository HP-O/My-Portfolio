import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

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
