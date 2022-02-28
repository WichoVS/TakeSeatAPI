const express = require("express");
const validatorHandler = require("../../middleware/validator.handler");
const Router = express.Router();
const { Create, GetAll, GetById, Update } = require("./review.controller");
const { createReview, getReview, updateReview } = require("../../DTO/review.dto");

Router.put("/createReview", validatorHandler(createReview, "body"), Create);
Router.get("/getAllReviews", GetAll);
Router.get("/getReviewById/:_id", validatorHandler(getReview, "params"), GetById);
Router.patch(
  "/updateReview/:_id",
  validatorHandler(getReview, "params"),
  validatorHandler(updateReview, "body"),
  Update
);

module.exports = Router;
