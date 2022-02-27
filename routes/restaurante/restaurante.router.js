const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./restaurante.controller");

Router.put("/createRestaurante", Create);
Router.get("/getAllRestaurantes", GetAll);
Router.get("/getRestauranteById/:id", GetById);
Router.patch("/updateRestaurante/:id", Update);

module.exports = Router;
