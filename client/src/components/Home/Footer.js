import React from "react";
import "./footer.css";
import logoWhite from "../logo/logowhite.ico";

//icons
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTrademark } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logoWhite} alt="" />

        <h5>
          Sistema de información <br /> para la gestión académica
        </h5>
        <h5>
          CONTACTO <br />
          Dirección: Av El Dorado #68 - 36 <br />
          Telefono: 3172899381 <br />
          Correo: sigasupport@siga.com.co
        </h5>
        <div>
          <AiOutlineInstagram className="icon-footer" />
          <AiOutlineFacebook className="icon-footer" />
          <AiOutlineLinkedin className="icon-footer" />
        </div>
      </div>
      <h5 className="siga-2023">
        {" "}
        <AiOutlineTrademark /> S.I.G.A 2023
      </h5>
    </div>
  );
};

export default Footer;
