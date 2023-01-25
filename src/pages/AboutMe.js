import React from "react";
import { Link } from "react-router-dom";
import "./about-me.css";

function AboutMe() {
  return (
    <div>
      <div className=" button-container">
        <button className="btn">
          <Link to="/">
            <p>Home</p>
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

      <div>
        <h1>Hello, You're Welcome to Hauwa's Profile!</h1>
        <img className="image" alt="" />

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
