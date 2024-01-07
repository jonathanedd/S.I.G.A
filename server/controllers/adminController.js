const { db } = require("../utils/database");

//LOGIN
const login = async (req, res) => {
  const email = await req.body.email;
  let password = await req.body.password;
  const pgQuery = `SELECT u.* FROM usuario u
    INNER JOIN correo c ON u.idusuario = c.fkcorreousuario
    INNER JOIN contrasena cn ON u.idusuario = cn.fkusuariocontrasena
    WHERE c.correo = $1 AND cn.contrasena = $2`;
  db.query(pgQuery, [email, password])
    .then((result) => {
      if (result.rows.length === 1) {
        res.status(200).json({ message: "Inicio de Sesión Exitoso" });
      } else {
        res.status(401).json({ message: "Credenciales Invalidas" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error del Servidor" });
    });
};

//GET USERS
const getUsers = async (req, res) => {
  const dbQuery = "SELECT * FROM users_view";
  try {
    const result = await db.query(dbQuery);
    res.json(result.rows);
  } catch (error) {
    console.log("Error en la consulta", error);
    res.status(500).json({ error: "Error en la sonsulta" });
  }
};

module.exports = { login, getUsers };
