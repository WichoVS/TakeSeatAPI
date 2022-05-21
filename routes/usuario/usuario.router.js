const express = require("express");
const Router = express.Router();
const { GetAll, GetById, Update, GetUsuarioRestaurante } = require("./usuario.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { getUsuario, updateUsuario } = require("../../DTO/usuario.dto");

Router.get("/getAllUsuarios", GetAll);
Router.get("/getUsuarioById/:_id", validatorHandler(getUsuario, "params"), GetById);
Router.patch("/updateUsuario/:_id", validatorHandler(updateUsuario, "body"), Update);
Router.get(
  "/usuarioRestaurante/:_id",
  validatorHandler(getUsuario, "params"),
  GetUsuarioRestaurante
);

module.exports = Router;
