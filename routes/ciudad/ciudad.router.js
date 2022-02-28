const express = require("express");
const Router = express.Router();
const { Create, GetById, GetAll, Update } = require("./ciudad.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { createCiudad, getCiudad, updateCuidad } = require("../../DTO/ciudad.dto");

Router.put("/createCiudad", validatorHandler(createCiudad, "body"), Create);
Router.get("/getCiudadById/:_id", validatorHandler(getCiudad, "params"), GetById);
Router.get("/getAllCiudades", GetAll);
Router.patch(
  "/updateCiudad/:_id",
  validatorHandler(getCiudad, "params"),
  validatorHandler(updateCuidad, "body"),
  Update
);

module.exports = Router;
