const mongoose = require("mongoose");

const RestauranteSchema = new mongoose.Schema(
  {
    Nombre: {
      required: true,
      type: String,
    },
    Categoria: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Categoria",
    },
    Administrador: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
    Ubicacion: {
      required: true,
      type: String,
    },
    Pais: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Pais",
    },
    Estado: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Estado",
    },
    Ciudad: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Ciudad",
    },
    Imagen: {
      required: true,
      type: String,
    },
    HorarioApertura: {
      required: true,
      type: Number,
    },
    HorarioCierre: {
      required: true,
      type: Number,
    },
    PrecioReservacion: {
      required: true,
      type: Number,
    },
    LugaresTotales: {
      required: true,
      type: Number,
    },
    UsuarioCreo: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
    },
    FechaCreacion: {
      required: true,
      type: mongoose.SchemaTypes.Date,
    },
    UsuarioModifico: {
      required: false,
      type: mongoose.Types.ObjectId,
    },
    FechaModificacion: {
      required: false,
      type: mongoose.SchemaTypes.Date,
    },
    Activo: {
      required: true,
      type: Boolean,
    },
  },
  {
    versionKey: false,
  }
);

RestauranteSchema.index({ Nombre: 1 }, { unique: true });

const Restaurante = mongoose.model("Restaurante", RestauranteSchema);

module.exports = Restaurante;
