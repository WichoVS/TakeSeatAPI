const mongoose = require("mongoose");
const Pais = require("../pais/pais.model");
const EstadoSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Pais: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Pais,
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
    Activo: {
      type: Boolean,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Estado = mongoose.model("Estado", EstadoSchema);

module.exports = Estado;
