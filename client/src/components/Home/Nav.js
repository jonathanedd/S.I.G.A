import React, { useEffect, useState } from "react";
import logoblue from "../logo/logoblue.ico";
import logowhite from "../logo/logowhite.ico";
import "./nav.css";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

//REACT SCROLL
// import { Link as scroll } from "react-scroll";
// TRABAJAR AQUI

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoImage = scrollingDown ? logowhite : logoblue;

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`main-nav ${scrollingDown && "scroll-nav"}`}>
      <img src={logoImage} alt="" />
      <nav className={`nav-links ${showMenu && "active"} `}>
        <ul>
          <li>
            <a className={scrollingDown ? "scroll-links" : "active"} href="/">
              ¿QUIENES SOMOS?
            </a>
          </li>
          <li>
            <a className={scrollingDown ? "scroll-links" : "active"} href="/">
              GESTIÓN ACADÉMICA
            </a>
          </li>
          <li>
            <a className={scrollingDown ? "scroll-links" : "active"} href="/">
              CONTACTANOS
            </a>
          </li>
          <li>
            <Link
              to="/login"
              className={scrollingDown ? "scroll-links" : "active"}
            >
              ACCEDER
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`menu-icon ${showMenu && "active"}`} onClick={handleMenu}>
        <GiHamburgerMenu
          className={`icon ${scrollingDown ? "white-icon" : "icon"}`}
        />
      </div>
    </div>
  );
};

export default Nav;
