import React from "react";

//ICONS
import iconpei from "../images/iconpei.png";
import iconaulas from "../images/iconaula.png";
import iconcurso from "../images/iconcurso.png";
import iconobjetivodesempeno from "../images/iconobjetivodesempeno.png";
import iconresultado from "../images/iconresultado.png";
import iconreporte from "../images/iconreporte.png";

const LeftBarSideAdmin = () => {
  return (
    <aside className="asideadmin">
      <div className="iconsleftside">
        <a href="http://">
          <img width="40px" src={iconpei} alt="" />
          <ul>
            <li>PEI</li>
          </ul>
        </a>

        <a href="http://">
          <img width="40px" src={iconaulas} alt="" />
          <ul>
            <li>Aulas</li>
          </ul>
        </a>

        <a href="http://">
          <img width="40px" src={iconcurso} alt="" />
          <ul>
            <li>Cursos</li>
          </ul>
        </a>

        <a href="http://">
          <img width="40px" src={iconobjetivodesempeno} alt="" />
          <ul>
            <li>Objetivos</li>
          </ul>
        </a>

        <a href="http://">
          <img width="40px" src={iconresultado} alt="" />
          <ul>
            <li>Resultados</li>
          </ul>
        </a>

        <a href="http://">
          <img width="40px" src={iconreporte} alt="" />
          <ul>
            <li>Reportes</li>
          </ul>
        </a>
      </div>
    </aside>
  );
};

export default LeftBarSideAdmin;
