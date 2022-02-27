const express = require("express");
const Router = express.Router();
const { Create, GetById, GetAll, Update } = require("./ciudad.controller");

Router.put("/createCiudad", Create);
Router.get("/getCiudadById/:id", GetById);
Router.get("/getAllCiudades", GetAll);
Router.patch("/updateCiudad/:id", Update);

module.exports = Router;
