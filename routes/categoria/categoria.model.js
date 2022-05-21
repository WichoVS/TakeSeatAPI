const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    FechaCreacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioCreo: {
      type: String,
      required: false,
      ref: "Usuario",
    },
    FechaModificacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioModifico: {
      type: String,
      ref: "Usuario",
    },
    Activo: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

CategoriaSchema.index({ Nombre: 1 }, { unique: true });

const Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;
