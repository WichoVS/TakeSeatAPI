const mongoose = require("mongoose");

const ReservacionSchema = new mongoose.Schema(
  {
    UsuarioReservo: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    Restaurante: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurante",
      required: true,
    },
    Horario: {
      type: Number,
      required: true,
    },
    Dia: {
      type: String,
      required: true,
    },
    Costo: {
      type: Number,
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
    Pagado: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Reservacion = mongoose.model("Reservacion", ReservacionSchema);

module.exports = Reservacion;
