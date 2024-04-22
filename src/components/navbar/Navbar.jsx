import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPerson, IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="container navbar">
      <ul>
        <li>EN</li>
        <li>USD</li>
      </ul>
      <ul>
        <li>
          <IoPerson />
        </li>
        <li>My profile</li>
        <li>
          <IoCartOutline />
        </li>
        <li> Items</li>
        <span>$0.00</span>
        <li>
          <CiSearch />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
