import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Companies</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Career Option</h4>
          <ul>
            <li>Channel Partners</li>
            <li>HR & Operations</li>
            <li>Real Estate Sales</li>
            <li>Tele Caller</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>CRM Executive</li>
            <li>Accounts & Auditing</li>
            <li>Legal</li>
            <li>Architects</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-about">
          <img src="/logo.png" alt="logo" />

          <p>
            Welcome to <strong>Real Estate Jobs, Inc</strong> – India’s first
            and only dedicated job portal exclusively designed for the real
            estate industry.
          </p>

          <p>
            Whether you are a job seeker looking to build a career in real
            estate or an employer searching for top talent, we are here to
            connect you with the right opportunities and resources.
          </p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Get In Touch</h4>

          <p className="address">
            <strong>Corporate Office:</strong><br/>
            2nd Floor, YS RAO Towers, Madhapur Rd,
            Sri Rama Colony, Jubilee Hills,
            Hyderabad, Telangana 500033
          </p>

          <div className="subscribe">
            <input type="email" placeholder="Email" />
            <button>→</button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}

      <div className="footer-bottom">

        <p>© 2026 Real Estate Jobs. All rights reserved.</p>

        <div className="socials">
          <span><FaFacebookF /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
          <span><FaLinkedinIn /></span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;