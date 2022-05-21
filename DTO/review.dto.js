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
const Comentario = Joi.string();
const FechaCalificacion = Joi.date();
const Activo = Joi.boolean();

const createReview = Joi.object({
  _id: _id.allow(null, ""),
  UsuarioReview: UsuarioReview.required(),
  Restaurante: Restaurante.required(),
  Comentario: Comentario.required(),
  FechaCalificacion: FechaCalificacion.allow(null).optional(),
  Activo: Activo.default(true).required(),
});

const updateReview = Joi.object({
  _id: _id.required(),
  Comentario: Comentario,
  FechaCalificacion: FechaCalificacion.allow(null).optional(),
  Activo: Activo,
});

const getReview = Joi.object({
  _id: _id.required(),
});

const getReviewsByRestaurante = Joi.object({
  _idUser: _id.required(),
  _idRestaurante: _id.required(),
});

module.exports = { createReview, updateReview, getReview, getReviewsByRestaurante };
