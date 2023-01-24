import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/resume">
          <p>Resume</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
      </div>
      <div>
        <h1>Hello, You're Welcome to Hauwa's Profile!</h1>
        <p> I'm a FullStack Developer in Javascript</p>
      </div>
    </div>
  );
}

export default AboutMe;
