const express = require("express");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./review.controller");

Router.put("/createReview", Create);
Router.get("/getAllReviews", GetAll);
Router.get("/getReviewById/:id", GetById);
Router.patch("/updateReview/:id", Update);

module.exports = Router;
