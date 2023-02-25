import React from "react";
import { useContext } from "react";
import { MedicalContext } from "../../MedicalContext";
import "./Header.scss";
import Logout from "../Logout/Logout";

function Header() {
  return (
    <div className="Header">
      <Logout />
    </div>
  );
}

export default Header;
