const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    UsuarioReview: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    Restaurante: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurante",
      required: true,
    },
    Comentario: {
      type: String,
      required: true,
    },
    FechaCalificacion: {
      type: String,
      required: true,
    },
    Activo: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
