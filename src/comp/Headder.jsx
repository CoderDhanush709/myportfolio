import React from "react";
import "./Headder.css";
import { Link } from "react-router-dom";
function Headder() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to={"/"}>
          Gadamsetti.<span> Dhanush Siva Raman</span>

          </Link>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>Skills</Link>
          </li>
          <li>
            <Link to={"/resume"}>Resume</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>

          <li>
            <a
              target="blank"
              href="https://github.com/CoderDhanush709"
            >
              git
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headder;
