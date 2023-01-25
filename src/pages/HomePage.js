import React from "react";
import { Link } from "react-router-dom";
import "./home-page.css";

function HomePage() {
  return (
    <div className="container">
      <div className=" button-container">
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

        <button className="btn">
          <Link to="/projects">
            <p>Projects</p>
          </Link>
        </button>
      </div>
      <div className="image-container">
        <h1>Welcome To My Portofolio</h1>
        <h3>Hauwa Poloma-Obadan</h3>
        <p>Fullstack: Javascript, React.js, Node.js</p>
      </div>
    </div>
  );
}

export default HomePage;
