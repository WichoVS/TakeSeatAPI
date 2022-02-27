const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./usuario.controller");

Router.put("/createUsuario", Create);
Router.get("/getAllUsuarios", GetAll);
Router.get("/getUsuarioById/:id", GetById);
Router.patch("/updateUsuario/:id", Update);

module.exports = Router;
