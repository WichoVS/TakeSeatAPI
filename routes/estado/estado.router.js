const express = require("express");
const {
  GetAll,
  GetById,
  Create,
  Update,
  ToggleStatus,
  GetActives,
} = require("./estado.controller");
const Router = express.Router();
const validatorHandler = require("../../middleware/validator.handler");
const { createEstado, getEstado, updateEstado } = require("../../DTO/estado.dto");

Router.get("/getActives", GetActives);
Router.get("/getAllEstados", GetAll);
Router.get("/getEstadoById/:_id", validatorHandler(getEstado, "params"), GetById);
Router.patch(
  "/updateEstado/:_id",
  validatorHandler(getEstado, "params"),
  validatorHandler(updateEstado, "body"),
  Update
);
Router.patch("/toggleStatus/:_id", ToggleStatus);
Router.put("/createEstado", validatorHandler(createEstado, "body"), Create);

module.exports = Router;
