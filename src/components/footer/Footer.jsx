import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="first">
          <div className="card">
            <img src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="card">
            <h3>Follow Us</h3>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
          <div className="card">
            <h3>Contact Us</h3>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="second">
          <div className="card">
            <h2>Infomation</h2>
            <ul>
              <li>About Us</li>
              <li> Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="card">
            <h2>Service</h2>
            <ul>
              <li>About Us</li>
              <li> Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="card">
            <h2>My Account</h2>
            <ul>
              <li>About Us</li>
              <li> Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="card">
            <h2>Our Offers</h2>
            <ul>
              <li>About Us</li>
              <li> Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
