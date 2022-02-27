const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./item-menu.controller");

Router.put("/createItemMenu", Create);
Router.patch("/updateItemMenu/:id", Update);
Router.get("/getAllItemMenu", GetAll);
Router.get("/getItemMenuById/:id", GetById);

module.exports = Router;
