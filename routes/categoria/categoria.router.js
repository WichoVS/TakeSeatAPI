const express = require("express");
const Router = express.Router();
const { GetAll, Update, Create, GetById, ToggleStatus } = require("./categoria.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { createCategoria, getCategoria, updateCategoria } = require("../../DTO/categoria.dto");

Router.put("/toggleStatus/:_id", validatorHandler(getCategoria, "params"), ToggleStatus);
Router.get("/getAllCategorias", GetAll);
Router.get("/getCategoriaById/:_id", validatorHandler(getCategoria, "params"), GetById);
Router.patch(
  "/updateCategoria/:_id",
  validatorHandler(getCategoria, "params"),
  validatorHandler(updateCategoria, "body"),
  Update
);
Router.put("/createCategoria", validatorHandler(createCategoria, "body"), Create);

module.exports = Router;
