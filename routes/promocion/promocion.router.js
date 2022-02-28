const express = require("express");
const validatorHandler = require("../../middleware/validator.handler");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./promocion.controller");
const { createPromocion, getPromocion, updatePromocion } = require("../../DTO/promocion.dto");

Router.put("/createPromocion", validatorHandler(createPromocion, "body"), Create);
Router.get("/getAllPromociones", GetAll);
Router.get("/getPromocionById/:_id", validatorHandler(getPromocion, "params"), GetById);
Router.patch(
  "/updatePromocion/:_id",
  validatorHandler(getPromocion, "params"),
  validatorHandler(updatePromocion, "body"),
  Update
);

module.exports = Router;
