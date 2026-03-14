import React from "react";
import "./Header.css";
import { FaBell } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">

      <div className="header-container">

        {/* LEFT LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="logo"/>
        </div>

        {/* RIGHT SECTION */}
        <div className="right">

          {/* MENU */}
          <nav className="menu">
            <a className="active">Home</a>
            <a>About Us</a>
            <a>Post a New job</a>
          </nav>

          {/* NOTIFICATION */}
          <div className="notification">
            <FaBell />
            <span className="badge">8</span>
          </div>

          {/* PROFILE */}
          <div className="profile">
            <div className="profile-text">
              <span className="name">Bheema</span>
              <span className="role">Applicant</span>
            </div>

            <IoChevronDown className="dropdown-icon"/>
          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;