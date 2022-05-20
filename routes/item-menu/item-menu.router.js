const express = require("express");
const Router = express.Router();
const {
  CreateItemMenu,
  GetItemsMenuByRestaurante,
  GetItemMenuById,
  UpdateItemMenu,
  ToggleActivoItemMenu,
} = require("./item-menu.controller");
const validatorHandler = require("../../middleware/validator.handler");
const { createItem, getItem, updateItem } = require("../../DTO/item-menu.dto");

Router.put("/createItemMenu", validatorHandler(createItem, "body"), CreateItemMenu);
Router.patch(
  "/updateItemMenu/:_id",
  validatorHandler(getItem, "params"),
  validatorHandler(updateItem, "body"),
  UpdateItemMenu
);
Router.get(
  "/getItemsMenuByRestaurante/:_id",
  validatorHandler(getItem, "params"),
  GetItemsMenuByRestaurante
);
Router.get("/getItemMenuById/:_id", validatorHandler(getItem, "params"), GetItemMenuById);
Router.patch(
  "/toggleItemMenuStatus/:_id",
  validatorHandler(getItem, "params"),
  ToggleActivoItemMenu
);

module.exports = Router;
