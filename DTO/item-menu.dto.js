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

const createItem = Joi.object({
  _id: _id.allow(null, "empty"),
  Nombre: Nombre.required(),
  Descripcion: Descripcion.required(),
  Restaurante: Restaurante.required(),
  Costo: Costo.required(),
  Imagen: Imagen.required(),
  FechaCreacion: FechaCreacion.default(Date.now).required(),
  FechaModificacion: FechaModificacion.allow(null),
  Activo: Activo.default(true).required(),
});

const updateItem = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Descripcion: Descripcion,
  Restaurante: Restaurante,
  Costo: Costo,
  Imagen: Imagen,
  FechaCreacion: FechaCreacion,
  FechaModificacion: FechaModificacion.default(Date.now).required(),
  Activo: Activo,
});

const getItem = Joi.object({
  _id: _id.required(),
});

module.exports = { createItem, updateItem, getItem };
