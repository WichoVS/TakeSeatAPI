const express = require("express");
const Router = express.Router();
const {
  Create,
  GetAll,
  GetById,
  Update,
  GetRestauranteInfoReservacion,
  GetRestauranteByFilter,
} = require("./restaurante.controller");
const validatorHandler = require("../../middleware/validator.handler");
const {
  createRestaurante,
  getRestaurante,
  updateRestaurante,
  getRestauranteInfoReservacion,
  getRestauranteByFilter,
} = require("../../DTO/restaurante.dto");

Router.put("/createRestaurante", validatorHandler(createRestaurante, "body"), Create);
Router.get("/getAllRestaurantes", GetAll);
Router.get("/getRestauranteById/:_id", validatorHandler(getRestaurante, "params"), GetById);
Router.patch(
  "/updateRestaurante/:_id",
  validatorHandler(getRestaurante, "params"),
  validatorHandler(updateRestaurante, "body"),
  Update
);

Router.post(
  "/infoReservacion",
  validatorHandler(getRestauranteInfoReservacion, "body"),
  GetRestauranteInfoReservacion
);

Router.post(
  "/getRestaurantesByFilters",
  validatorHandler(getRestauranteByFilter, "body"),
  GetRestauranteByFilter
);

module.exports = Router;
