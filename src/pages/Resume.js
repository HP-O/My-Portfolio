import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";

function Resume() {
  return (
    <div>
      <div className=" button-container">
        <button className="btn">
          <Link to="/">
            <p>Home</p>
          </Link>
        </button>

        <button className="btn">
          <Link to="/aboutme">
            <p>About Me</p>
          </Link>
        </button>

        <button className="btn">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </button>
      </div>

      <div>
        <h1>Resume</h1>
      </div>
    </div>
  );
}

export default Resume;
