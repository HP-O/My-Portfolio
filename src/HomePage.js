import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <Link to="/aboutme">
          <p>About Me</p>
        </Link>
        <Link to="/resume">
          <p>Resume</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
      </div>
      <div>
        <h1>Welcome To My Portofolio</h1>
      </div>
    </div>
  );
}

export default HomePage;
