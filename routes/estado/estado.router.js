const express = require("express");
const { GetAll, GetById, Create, Update } = require("./estado.controller");
const Router = express.Router();

Router.get("/getAllEstados", GetAll);
Router.get("/getEstadoById/:id", GetById);
Router.patch("/updateEstado/:id", Update);
Router.put("/createEstado", Create);

module.exports = Router;
