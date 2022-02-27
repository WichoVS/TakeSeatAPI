const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./reservacion.controller");

Router.put("/createReservacion", Create);
Router.get("/getAllReservaciones", GetAll);
Router.get("/getReservacionById/:id", GetById);
Router.patch("/updateReservacion/:id", Update);

module.exports = Router;
