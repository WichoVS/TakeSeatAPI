const mongoose = require("mongoose");

const ItemMenuSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      requried: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Imagen: {
      type: String,
      required: true,
    },
    Costo: {
      type: Number,
      required: true,
    },
    Restaurante: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurante",
      required: true,
    },
    FechaCreacion: {
      type: String,
      required: true,
    },
    FechaModificacion: {
      type: String,
      required: false,
    },
    Activo: {
      type: Boolean,
      required: true,
    },
    Especial: {
      type: Boolean,
      required: true,
    },
    Tipo: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const ItemMenu = mongoose.model("ItemMenu", ItemMenuSchema);

module.exports = ItemMenu;
