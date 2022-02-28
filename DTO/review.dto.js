const Joi = require("joi");

// _id: faker.datatype.uuid(),
// UsuarioReview: faker.datatype.uuid(),
// Restaurante: faker.datatype.uuid(),
// Calificacion: faker.datatype.number(),
// Comentario: faker.lorem.sentence(),
// FechaCalificacion: faker.date.past(),
// FechaVisita: faker.date.past(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const UsuarioReview = Joi.string();
const Restaurante = Joi.string();
const Calificacion = Joi.number().min(0).max(10);
const Comentario = Joi.string();
const FechaCalificacion = Joi.date();
const FechaVisita = Joi.date().less(Joi.ref("FechaCalificacion"));
const Activo = Joi.boolean();

const createReview = Joi.object({
  _id: _id.allow(null, "empty"),
  UsuarioReview: UsuarioReview.required(),
  Restaurante: Restaurante.required(),
  Calificacion: Calificacion.required(),
  Comentario: Comentario.required(),
  FechaCalificacion: FechaCalificacion.default(Date.now).required(),
  FechaVisita: FechaVisita.required(),
  Activo: Activo.default(true).required(),
});

const updateReview = Joi.object({
  _id: _id.required(),
  UsuarioReview: UsuarioReview,
  Restaurante: Restaurante,
  Calificacion: Calificacion,
  Comentario: Comentario,
  FechaCalificacion: FechaCalificacion.default(Date.now).required(),
  FechaVisita: FechaVisita,
  Activo: Activo,
});

const getReview = Joi.object({
  _id: _id.required(),
});

module.exports = { createReview, updateReview, getReview };
