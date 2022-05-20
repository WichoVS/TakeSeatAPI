const Joi = require("joi");

const _id = Joi.string();
const Restaurante = Joi.string();
const Descripcion = Joi.string();
const Slogan = Joi.string();
const FechaCreacion = Joi.date();
const UsuarioCreo = Joi.string();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));

const createDescripcion = Joi.object({
  _id: _id.allow(null, ""),
  Restaurante: Restaurante.required(),
  Descripcion: Descripcion.required(),
  Slogan: Slogan.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.required(),
  FechaModificacion: FechaModificacion.allow(null),
});

const updateDescripcion = Joi.object({
  _id: _id.required(),
  Restaurante: Restaurante,
  Descripcion: Descripcion.required(),
  Slogan: Slogan.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.optional().allow(null),
  FechaModificacion: FechaModificacion.optional().allow(null),
});

const getDescripcion = Joi.object({
  _idRestaurante: _id.required(),
});

module.exports = { createDescripcion, updateDescripcion, getDescripcion };
