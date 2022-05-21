const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: faker.commerce.productAdjective(),
// Descripcion: faker.commerce.productDescription(),
// Restaurante: faker.datatype.uuid(),
// Imagen: faker.image.business(),
// FechaInicio: faker.date.recent(),
// FechaFin: faker.date.future(),
// FechaCreacion: faker.date.past(),
// FechaModificacion: faker.date.recent(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const Descripcion = Joi.string();
const Restaurante = Joi.string();
const Imagen = Joi.string();
const FechaInicio = Joi.date();
const FechaFin = Joi.date().greater(Joi.ref("FechaInicio"));
const FechaCreacion = Joi.date();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const Activo = Joi.boolean();

const createPromocion = Joi.object({
  _id: _id.allow(null, "empty"),
  Nombre: Nombre.required(),
  Descripcion: Descripcion.required(),
  Restaurante: Restaurante.required(),
  Imagen: Imagen.required(),
  FechaInicio: FechaInicio.required(),
  FechaFin: FechaFin.required(),
  FechaCreacion: FechaCreacion.default(Date.now).required(),
  FechaModificacion: FechaModificacion.allow(null),
  Activo: Activo.default(true).required(),
});

const updatePromocion = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Descripcion: Descripcion,
  Restaurante: Restaurante,
  Imagen: Imagen,
  FechaInicio: FechaInicio,
  FechaFin: FechaFin,
  FechaCreacion: FechaCreacion,
  FechaModificacion: FechaModificacion.default(Date.now).required(),

  Activo: Activo,
});

const getPromocion = Joi.object({
  _id: _id.required(),
});

module.exports = { createPromocion, updatePromocion, getPromocion };
