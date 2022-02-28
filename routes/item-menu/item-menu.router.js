const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./item-menu.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { createItem, getItem, updateItem } = require("../../DTO/item-menu.dto");

Router.put("/createItemMenu", validatorHandler(createItem, "body"), Create);
Router.patch(
  "/updateItemMenu/:_id",
  validatorHandler(getItem, "params"),
  validatorHandler(updateItem, "body"),
  Update
);
Router.get("/getAllItemMenu", GetAll);
Router.get("/getItemMenuById/:_id", validatorHandler(getItem, "params"), GetById);

module.exports = Router;
