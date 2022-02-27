const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./promocion.controller");

Router.put("/createPromocion", Create);
Router.get("/getAllPromociones", GetAll);
Router.get("/getPromocionById/:id", GetById);
Router.patch("/updatePromocion/:id", Update);

module.exports = Router;
