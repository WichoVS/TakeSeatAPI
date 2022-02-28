const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./usuario.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { createUsuario, getUsuario, updateUsuario } = require("../../DTO/usuario.dto");

Router.put("/createUsuario", validatorHandler(createUsuario, "body"), Create);
Router.get("/getAllUsuarios", GetAll);
Router.get("/getUsuarioById/:_id", validatorHandler(getUsuario, "params"), GetById);
Router.patch("/updateUsuario/:_id", validatorHandler(updateUsuario, "body"), Update);

module.exports = Router;
