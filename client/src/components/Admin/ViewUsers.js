import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";

//API
import { API } from "../../api";

//REPORTS
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { unparse } from "papaparse";

//COMPONENT
const DashboardAdmin = () => {
  const [vistaUsuario, setVistaUsuario] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  //USEEFFECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/viewusers`);
        setVistaUsuario(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, []);

  //FUNCTIONS:
  //HandleSearch : gets value from search
  const handleSearchUser = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchUser(search);
  };

  //filterUser: filter view_user
  const filterUser = vistaUsuario.filter(
    (view) =>
      view.idusuario.toString().includes(searchUser.toString()) ||
      view.nombres.toLowerCase().includes(searchUser.toLowerCase()) ||
      view.apellidos.toLowerCase().includes(searchUser.toLowerCase()) ||
      view.descripcionrol.toLowerCase().includes(searchUser.toLowerCase())
  );

  //Format Date
  const formatFecha = (fecha) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  //PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["Nombre", "Apellido", "Rol", "Telefono", "Correo", "Dirección"]],
      body: vistaUsuario.map((vista) => [
        vista.nombres,
        vista.apellidos,
        vista.descripcionrol,
        vista.telefono,
        vista.correo,
        vista.direccion,
      ]),
    });
    doc.save("Reporte.pdf");
  };

  //CVS
  const generateCVS = () => {
    const data = unparse(vistaUsuario);
    const blob = new Blob([data], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Reporte.csv";
    document.body.appendChild(link);
    link.click();
  };

  //Excel
  const generateExcel = () => {
    const data = XLSX.utils.json_to_sheet(vistaUsuario);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, data, "Usuarios");
    XLSX.writeFile(wb, "Reporte.xlsx");
  };

  // JSX
  return (
    <div className="viewusers-admin-container">
      <div className="viewusers" id="viewusers">
        <h1>Lista de Usuarios</h1>

        <form action="">
          <label htmlFor="">Buscar: </label>
          <input
            type="text"
            value={searchUser}
            onChange={handleSearchUser}
            placeholder="Filtrar"
          />
        </form>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellido</th>
              <th>Rol</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Dirección</th>
              <th>Nacimiento</th>
              <th>Genero</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filterUser.map((vista) => (
              <tr key={vista.idusuario}>
                <td>{vista.idusuario}</td>
                <td>{vista.nombres}</td>
                <td>{vista.apellidos}</td>
                <td>{vista.descripcionrol}</td>
                <td>{vista.telefono}</td>
                <td>{vista.correo}</td>
                <td>{vista.direccion}</td>
                <td>{formatFecha(vista.fechanacimiento)}</td>
                <td>{vista.genero}</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={generatePDF}>Generar PDF</button>
        <button onClick={generateExcel}>Excel</button>
        <button onClick={generateCVS}>CVS</button>
      </div>
    </div>
  );
};

export default DashboardAdmin;
