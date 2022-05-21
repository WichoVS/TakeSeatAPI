const express = require("express");
const Router = express.Router();
const {
  CreateReservacion,
  GetAllReservaciones,
  GetByIdReservacion,
  UpdateReservacion,
  GetReservacionesByUser,
  GetReservacionesByRestaurante,
  CancelarReservacion,
  PagarReservacion,
  GetMisReservaciones,
} = require("./reservacion.controller");
const validatorHandler = require("../../middleware/validator.handler");
const {
  createReservacion,
  getReservacion,
  updateReservacion,
} = require("../../DTO/reservacion.dto");

Router.put("/createReservacion", validatorHandler(createReservacion, "body"), CreateReservacion);
Router.get("/getAllReservaciones", GetAllReservaciones);
Router.get(
  "/getAllReservacionesByRestaurante/:_id",
  validatorHandler(getReservacion, "params"),
  GetReservacionesByRestaurante
);
Router.get(
  "/getAllReservacionesByUser/:_id",
  validatorHandler(getReservacion, "params"),
  GetReservacionesByUser
);
Router.get(
  "/getReservacionById/:_id",
  validatorHandler(getReservacion, "params"),
  GetByIdReservacion
);
Router.patch(
  "/updateReservacion/:_id",
  validatorHandler(getReservacion, "params"),
  validatorHandler(updateReservacion, "body"),
  UpdateReservacion
);

Router.patch(
  "/cancelarReservacion/:_id",
  validatorHandler(getReservacion, "params"),
  CancelarReservacion
);

Router.patch(
  "/pagarReservacion/:_id",
  validatorHandler(getReservacion, "params"),
  PagarReservacion
);

Router.get("/getMisReservaciones/:_id", GetMisReservaciones);

module.exports = Router;
