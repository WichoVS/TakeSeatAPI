const express = require("express");
const Router = express.Router();
const { GetAll, Update, Create, GetById } = require("./categoria.controller");

Router.get("/getAllCategorias", GetAll);
Router.get("/getCategoriaById/:id", GetById);
Router.patch("/updateCategoria/:id", Update);
Router.put("/createCategoria", Create);

module.exports = Router;
