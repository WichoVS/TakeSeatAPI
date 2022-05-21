const express = require("express");
const validatorHandler = require("../../middleware/validator.handler");
const Router = express.Router();
const {
  Create,
  GetAll,
  GetById,
  Update,
  GetByRestaurante,
  CanReview,
} = require("./review.controller");
const {
  createReview,
  getReview,
  updateReview,
  getReviewsByRestaurante,
} = require("../../DTO/review.dto");

Router.put("/createReview", validatorHandler(createReview, "body"), Create);
Router.get("/getAllReviews", GetAll);
Router.get("/getReviewById/:_id", validatorHandler(getReview, "params"), GetById);
Router.patch(
  "/updateReview/:_id",
  validatorHandler(getReview, "params"),
  validatorHandler(updateReview, "body"),
  Update
);

Router.get("/getReviewByRestaurante/:_id", validatorHandler(getReview, "params"), GetByRestaurante);

Router.get(
  "/canReview/:_idUser/:_idRestaurante",
  validatorHandler(getReviewsByRestaurante, "params"),
  CanReview
);

module.exports = Router;
