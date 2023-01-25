import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "./projects.css";

function Projects() {
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
          <Link to="/resume">
            <p>Resume</p>
          </Link>
        </button>
      </div>

      <div>
        <h1>Projects</h1>
        <div>
          <ExternalLink href="https://hpo-pxtoremconverter.netlify.app/">
            <p>Px to Rem Converter</p>
          </ExternalLink>
        </div>
        <ExternalLink href="https://hpo-ageindays.netlify.app/">
          <p>Age In Days</p>
        </ExternalLink>
      </div>
    </div>
  );
}

export default Projects;
