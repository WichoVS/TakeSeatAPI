const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: faker.commerce.product(),
// Descripcion: faker.lorem.sentence(),
// Restaurante: faker.company.companyName(),
// Costo: parseInt(faker.commerce.price()),
// Imagen: faker.image.food(),
// FechaCreacion: faker.date.past(),
// FechaModificacion: faker.date.recent(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const Descripcion = Joi.string();
const Restaurante = Joi.string();
const Costo = Joi.number().min(0);
const Imagen = Joi.string();
const FechaCreacion = Joi.date();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const Activo = Joi.boolean();
const Especial = Joi.boolean();
const Tipo = Joi.string();

const createItem = Joi.object({
  _id: _id.allow(null, ""),
  Nombre: Nombre.required(),
  Descripcion: Descripcion.required(),
  Imagen: Imagen.required(),
  Costo: Costo.required(),
  Restaurante: Restaurante.required(),
  FechaCreacion: FechaCreacion.allow(null),
  FechaModificacion: FechaModificacion.allow(null),
  Activo: Activo.default(true).required(),
  Especial: Especial.required(),
  Tipo: Tipo.required(),
});

const updateItem = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Descripcion: Descripcion,
  Imagen: Imagen,
  Costo: Costo,
  Restaurante: Restaurante,
  FechaCreacion: FechaCreacion.allow(null),
  FechaModificacion: FechaModificacion.allow(null),
  Activo: Activo.default(true).required(),
  Especial: Especial.required(),
  Tipo: Tipo.required(),
});

const getItem = Joi.object({
  _id: _id.required(),
});

module.exports = { createItem, updateItem, getItem };
