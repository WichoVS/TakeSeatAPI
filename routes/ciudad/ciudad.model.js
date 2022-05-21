const mongoose = require("mongoose");
const Estado = require("../estado/estado.model");

const CiudadSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Estado: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Estado,
      required: false,
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
      requried: false,
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

const Ciudad = mongoose.model("Ciudad", CiudadSchema);

module.exports = Ciudad;
