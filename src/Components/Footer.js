import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
  <a href="https://twitter.com">
    <BsTwitter />
  </a>
  <a href="https://www.linkedin.com">
    <SiLinkedin />
  </a>
  <a href="https://www.youtube.com">
    <BsYoutube />
  </a>
  <a href="https://www.facebook.com">
    <FaFacebookF />
  </a>
</div>

      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>About</span>
          <span>Products</span>
          <span>Location</span>
          <span>Contact</span>
          <span>Booking List</span>
        </div>
        <div className="footer-section-columns">
          <span>524-7289-233</span>
          <span>greenHill@food.com</span>

        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
