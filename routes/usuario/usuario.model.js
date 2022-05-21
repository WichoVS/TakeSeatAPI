const mongoose = require("mongoose");
const Ciudad = require("../ciudad/ciudad.model");
const Estado = require("../estado/estado.model");
const Pais = require("../pais/pais.model");

const UsuarioSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Usuario: {
      type: String,
      required: true,
    },
    Correo: {
      type: String,
      required: true,
    },
    Imagen: {
      type: Object,
      required: true,
      data: Buffer,
      contentType: String,
    },
    Pais: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Pais,
      required: false,
    },
    Estado: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Estado,
      required: false,
    },
    Ciudad: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Ciudad,
      required: false,
    },
    Password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    FechaCreacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    FechaModificacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    Administrador: {
      type: Boolean,
      required: false,
    },
  },
  { versionKey: false }
);

UsuarioSchema.index({ Correo: 1, Usuario: 1 }, { unique: true });

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
