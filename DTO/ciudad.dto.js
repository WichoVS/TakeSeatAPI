const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: faker.address.city(),
// Estado: faker.datatype.uuid(),
// FechaCreacion: faker.date.past(),
// UsuarioCreo: faker.datatype.uuid(),
// FechaModificacion: faker.date.recent(),
// UsuarioModifico: faker.datatype.uuid(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const Estado = Joi.string();
const FechaCreacion = Joi.date();
const UsuarioCreo = Joi.string();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const UsuarioModifico = Joi.string();
const Activo = Joi.boolean();

const createCiudad = Joi.object({
  _id: _id.allow(null, ""),
  Nombre: Nombre.required(),
  Estado: Estado.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioCreo: UsuarioCreo.required(),
  FechaModificacion: FechaModificacion.allow(null),
  UsuarioModifico: UsuarioModifico.allow(null),
  Activo: Activo.optional(),
});

const updateCuidad = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Estado: Estado,
  FechaCreacion: FechaCreacion,
  UsuarioCreo: UsuarioCreo,
  FechaModificacion: FechaModificacion.optional().allow(null),
  UsuarioModifico: UsuarioModifico.required(),
  Activo: Activo,
});

const getCiudad = Joi.object({
  _id: _id.required(),
});

module.exports = { createCiudad, updateCuidad, getCiudad };
