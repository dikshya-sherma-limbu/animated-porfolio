import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="container"> */}
      <div className="wrapper">
        <Sidebar />

        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/dikshya_sherma/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/dikshya-sherma-7b0b3b1b2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://www.github.com/dikshya-sherma"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
