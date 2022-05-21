const Joi = require("joi");

const _id = Joi.string();
const Nombre = Joi.string();
const Descripcion = Joi.string();
const FechaCreacion = Joi.date();
const UsuarioCreo = Joi.string();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const UsuarioModifico = Joi.string();
const Activo = Joi.boolean();

const createCategoria = Joi.object({
  _id: _id.allow(null, ""),
  Nombre: Nombre.required(),
  Descripcion: Descripcion.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.required(),
  FechaModificacion: FechaModificacion.allow(null),
  UsuarioModifico: UsuarioModifico.allow(null),
  Activo: Activo.default(true).required(),
});

const updateCategoria = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Descripcion: Descripcion,
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.optional().allow(null),
  FechaModificacion: FechaModificacion.optional().allow(null),
  UsuarioModifico: UsuarioModifico.required(),
  Activo: Activo,
});

const getCategoria = Joi.object({
  _id: _id.required(),
});

module.exports = { createCategoria, updateCategoria, getCategoria };
