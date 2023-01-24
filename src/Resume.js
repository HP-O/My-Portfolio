import React from "react";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/aboutme">
          <p>About Me</p>
        </Link>

        <Link to="/projects">
          <p>Projects</p>
        </Link>
      </div>
      <div>
        <h1>Resume</h1>
      </div>
    </div>
  );
}

export default Resume;
