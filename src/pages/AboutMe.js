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
        <p>
          I'm a FullStack Javascript Developer, currently looking for an
          Internship or Junior developer role/position that will give me the
          necessary skills to become a competitive developer. My strength is
          currently react.js but I am willing to apply myself in an environment
          that will provide the needed mentorship to progress in my career.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
