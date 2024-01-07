const express = require("express");
const cors = require("cors");
const app = express();

//ROUTERS
const { loginRouter, getUsersRouter } = require("./routes/adminRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Endpoints
app.use("/api", loginRouter);
app.use("/api/ga/viewusers", getUsersRouter);

module.exports = { app };
