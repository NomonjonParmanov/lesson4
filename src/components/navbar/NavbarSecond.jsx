import React from "react";
import logo from "../../assets/logo.png";
function NavbarSecond() {
  return (
    <div className="container navbar__second">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>BAGS</li>
        <li>SNEAKERS</li>
        <li>BELT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default NavbarSecond;
