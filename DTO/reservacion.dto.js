const Joi = require("joi");

// _id: faker.datatype.uuid(),
// NoReservacion: faker.datatype.number(),
// UsuarioReservo: faker.datatype.uuid(),
// Restaurante: faker.datatype.uuid(),
// Horario: faker.time.recent(),
// Dia: faker.date.soon(),
// Costo: faker.datatype.number(),
// FechaCreacion: faker.date.past(),
// FechaModificacion: faker.date.recent(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const NoReservacion = Joi.number();
const UsuarioReservo = Joi.string();
const Restaurante = Joi.string();
const Horario = Joi.string();
const Dia = Joi.date();
const Costo = Joi.number().min(0);
const FechaCreacion = Joi.date();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const Activo = Joi.boolean();

const createReservacion = Joi.object({
  _id: _id.allow(null, "empty"),
  NoReservacion: NoReservacion.required(),
  UsuarioReservo: UsuarioReservo.required(),
  Restaurante: Restaurante.required(),
  Horario: Horario.required(),
  Dia: Dia.required(),
  Costo: Costo.required(),
  FechaCreacion: FechaCreacion.default(Date.now).required(),
  FechaModificacion: FechaModificacion.allow(null),
  Activo: Activo.default(true).required(),
});

const updateReservacion = Joi.object({
  _id: _id.required(),
  NoReservacion: NoReservacion,
  UsuarioReservo: UsuarioReservo,
  Restaurante: Restaurante,
  Horario: Horario,
  Dia: Dia.required(),
  Costo: Costo.required(),
  FechaCreacion: FechaCreacion,
  FechaModificacion: FechaModificacion.default(Date.now).required(),
  Activo: Activo,
});

const getReservacion = Joi.object({
  _id: _id.required(),
});

module.exports = { createReservacion, updateReservacion, getReservacion };
