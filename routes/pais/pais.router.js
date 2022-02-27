const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./pais.controller");

Router.get("/getAllPaises", GetAll);
Router.get("/getPaisById/:id", GetById);
Router.put("/createPais", Create);
Router.patch("/updatePais/:id", Update);

module.exports = Router;
