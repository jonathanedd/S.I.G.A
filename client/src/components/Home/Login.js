import React, { useState } from "react";
import "./login.css";
import axios from "axios";

//API
import { API } from "../../api";

// React router dom imports
import { Link, useNavigate } from "react-router-dom";

// react icons imports
import { BsArrowLeft } from "react-icons/bs";

// Logo import
import iconwhite from "../images/iconwhite.png";

//Motions
import { motion } from "framer-motion";

const Login = () => {
  //state hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //Navigate
  const navigate = useNavigate();

  //Function to get values
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  //Function to handle acceder button
  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post(`${API}/login`, { email, password })
      .then((res) => {
        console.log(res);
        setErrors(["Bienvenido"]);
        // Logica para validar roles de usuario
        navigate("/admininterface");
      })
      .catch((err) => {
        console.log(err);
        setErrors(["Credenciales Invalidas"]);
      });
  };

  return (
    <div className="main-login">
      <div className="blue-box">
        <h2>Comienza tu aventura con nosotros.</h2>
        <h1>S.I.G.A</h1>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={iconwhite} alt="" />
        </motion.div>

        <Link className="back" to="/">
          <BsArrowLeft />
        </Link>
      </div>

      <div className="form-info">
        <div className="row-form">
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Correo</label>
            <input
              name="email"
              type="email"
              placeholder="Ingresa tu correo"
              onChange={handleChange}
              value={email}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={handleChange}
              value={password}
            />
            {errors.length > 0 && <p>{errors[0]}</p>}
          </form>

          <a href="/">Recordar contraseña</a>
        </div>

        <div className="row-low-btn">
          <button onClick={handleLogin}>Acceder</button>
          <h3>¿Administras un colegio?</h3>
          <button>Afiliate</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
