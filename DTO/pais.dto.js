const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: faker.address.country(),
// FechaCreacion: faker.date.past(),
// UsuarioCreo: faker.datatype.uuid(),
// FechaModificacion: faker.date.recent(),
// UsuarioModifico: faker.datatype.uuid(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const FechaCreacion = Joi.date();
const UsuarioCreo = Joi.string();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const UsuarioModifico = Joi.string();
const Activo = Joi.boolean();

const createPais = Joi.object({
  _id: _id.allow(null, ""),
  Nombre: Nombre.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.required(),
  FechaModificacion: FechaModificacion.allow(null),
  UsuarioModifico: UsuarioModifico.allow(null),
  Activo: Activo.default(true).required(),
});

const updatePais = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.optional().allow(null),
  FechaModificacion: FechaModificacion.allow(null),
  UsuarioModifico: UsuarioModifico.required(),
  Activo: Activo,
});

const getPais = Joi.object({
  _id: _id.required(),
});

module.exports = { createPais, updatePais, getPais };
