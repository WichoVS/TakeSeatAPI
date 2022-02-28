const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./reservacion.controller");
const validatorHandler = require("../../middleware/validator.handler");
const {
  createReservacion,
  getReservacion,
  updateReservacion,
} = require("../../DTO/reservacion.dto");

Router.put("/createReservacion", validatorHandler(createReservacion, "body"), Create);
Router.get("/getAllReservaciones", GetAll);
Router.get("/getReservacionById/:_id", validatorHandler(getReservacion, "params"), GetById);
Router.patch(
  "/updateReservacion/:_id",
  validatorHandler(getReservacion, "params"),
  validatorHandler(updateReservacion, "body"),
  Update
);

module.exports = Router;
