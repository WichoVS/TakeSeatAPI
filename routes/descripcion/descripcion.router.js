const express = require("express");
const {
  CreateDescripcion,
  GetDescripcion,
  UpdateDescripcion,
} = require("./descripcion.controller");
const Router = express.Router();
const validatorHandler = require("../../middleware/validator.handler");
const {
  createDescripcion,
  getDescripcion,
  updateDescripcion,
} = require("../../DTO/descripcion.dto");

Router.get(
  "/getDescripcion/:_idRestaurante",
  validatorHandler(getDescripcion, "params"),
  GetDescripcion
);
Router.put("/createDescripcion", validatorHandler(createDescripcion, "body"), CreateDescripcion);
Router.patch(
  "/updateDescripcion/:_idRestaurante",
  validatorHandler(getDescripcion, "params"),
  validatorHandler(updateDescripcion, "body"),
  UpdateDescripcion
);

module.exports = Router;
