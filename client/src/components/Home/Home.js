import React from "react";
import "./home.css";

//other
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Images
import dashboard1 from "../images/home-dashboard-1.png";
import dashboard2 from "../images/home-dashboard-2.png";
import sigaMacbook from "../images/siga-macbook.png";

// React icons
import { MdSecurity } from "react-icons/md";
import { TbHierarchy3 } from "react-icons/tb";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="main-home">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="fade-box">
            <h1>
              Sistema de Información para <br /> la Gestión Académica
            </h1>
            <img src={dashboard1} alt="" />
          </div>
        </motion.div>

        <div className="box-btn-explorar">
          <Link className="explorar" to="/errorsSiga">
            Explorar
          </Link>
        </div>

        <div className="home-cards">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="card">
              <MdSecurity className="home-icon" />
              <h2>+5 Paises</h2>
              <h1>SEGURIDAD</h1>
              <h5>Infraestructura de primer nivel</h5>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="card">
              <TbHierarchy3 className="home-icon" />
              <h2>+100.000 Usuarios</h2>
              <h1>INTEGRACIÓN</h1>
              <h5>Tus datos siempre disponibles</h5>
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="card">
              <BsChatTextFill className="home-icon" />
              <h2>+140 Colegios</h2>
              <h1>SOPORTE</h1>
              <h5>Acompañamiento</h5>
            </div>
          </motion.div>
        </div>

        <div className="quienes-somos">
          <div>
            <h1>¿Quienes somos?</h1>
            <p>
              Somos SIGA: tu socio en la gestión académica. Con un compromiso
              inquebrantable con la excelencia educativa, hemos desarrollado una
              plataforma integral que simplifica la administración escolar y
              potencia el aprendizaje. Nuestra misión es proporcionar a
              educadores, administradores y estudiantes las herramientas
              necesarias para alcanzar el éxito académico. Con años de
              experiencia en el campo de la educación, estamos aquí para hacer
              que la gestión académica sea más eficiente, accesible y efectiva.
              Únete a nosotros en el viaje hacia un futuro educativo más
              brillante.
            </p>
          </div>

          <img width="600px" src={sigaMacbook} alt="" />
        </div>

        <div className="home-info">
          <span>
            <h1>Proceso Educativo</h1>
            <p>
              Administra los cursos, calificaciones, materias, tareas y <br />{" "}
              examenes en linea. <br />
              <br />
              Imprime boletines y documentación oficial.
            </p>
          </span>
          <img src={dashboard2} alt="" />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
