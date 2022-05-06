const express = require("express");
const validatorHandler = require("../../middleware/validator.handler");
const Router = express.Router();
const { Create, GetAll, GetById, Update, ToggleStatus } = require("./pais.controller");
const { createPais, getPais, updatePais } = require("../../DTO/pais.dto");

Router.get("/getAllPaises", GetAll);
Router.get("/getPaisById/:_id", validatorHandler(getPais, "params"), GetById);
Router.put("/createPais", validatorHandler(createPais, "body"), Create);
Router.patch(
  "/updatePais/:_id",
  validatorHandler(getPais, "params"),
  validatorHandler(updatePais, "body"),
  Update
);
Router.patch("/toggleStatus/:_id", validatorHandler(getPais, "params"), ToggleStatus);

module.exports = Router;
