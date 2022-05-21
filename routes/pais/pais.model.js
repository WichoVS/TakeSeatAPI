const mongoose = require("mongoose");

const PaisSchema = new mongoose.Schema(
  {
    Nombre: {
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
    Activo: {
      type: Boolean,
      required: false,
    },
  },
  { versionKey: false }
);

PaisSchema.index({ Nombre: 1 }, { unique: true });

const Pais = mongoose.model("Pais", PaisSchema);

module.exports = Pais;
