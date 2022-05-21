const mongoose = require("mongoose");

const DescripcionSchema = new mongoose.Schema(
  {
    Restaurante: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurante",
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Slogan: {
      type: String,
      required: true,
    },
    FechaCreacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioCreo: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Usuario",
      required: false,
    },
    FechaModificacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioModifico: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Usuario",
      required: false,
    },
  },
  { versionKey: false }
);

const Descripcion = mongoose.model("DescripcionRestaurante", DescripcionSchema);

module.exports = Descripcion;
