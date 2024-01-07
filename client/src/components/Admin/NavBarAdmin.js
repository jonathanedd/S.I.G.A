import React from "react";
import "./admin.css";
import logowhite from "../logo/logowhite.ico";

const NavBarAdmin = ({ handleuserlist }) => {
  return (
    <div className="navbar-admin-container">
      <img src={logowhite} alt="" />
      <div className="nav-links-admin">
        <ul>
          <li>Inicio</li>
          <li>Docentes</li>
          <li>Alumnos</li>
          <li onClick={handleuserlist}>Usuarios</li>
          <li>Comunicados</li>
          <li>Chat</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarAdmin;
