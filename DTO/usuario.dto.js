const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
// Usuario: faker.internet.userName(),
// Correo: faker.internet.email(),
// Imagen: faker.image.avatar(),
// Pais: faker.datatype.uuid(),
// Estado: faker.datatype.uuid(),
// Ciudad: faker.datatype.uuid(),
// Password: faker.internet.password(),
// FechaCreacion: faker.date.past(),
// FechaModificacion: faker.date.recent(),
// Administrador: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const Usuario = Joi.string().min(8).max(16);
const Correo = Joi.string();
const Imagen = Joi.string();
const Pais = Joi.string();
const Estado = Joi.string();
const Ciudad = Joi.string();
const Password = Joi.string().min(8).max(16);
const FechaCreacion = Joi.date();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const Administrador = Joi.boolean();

const createUsuario = Joi.object({
  _id: _id.allow(null, "empty"),
  Nombre: Nombre.required(),
  Usuario: Usuario.required(),
  Correo: Correo.required(),
  Imagen: Imagen.required(),
  Pais: Pais.required(),
  Estado: Estado.required(),
  Ciudad: Ciudad.required(),
  Password: Password.required(),
  FechaCreacion: FechaCreacion.default(Date.now).required(),
  FechaModificacion: FechaModificacion.allow(null),
  Administrador: Administrador.default(true).required(),
});

const updateUsuario = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Usuario: Usuario,
  Correo: Correo,
  Imagen: Imagen,
  Pais: Pais,
  Estado: Estado,
  Ciudad: Ciudad,
  Password: Password,
  FechaCreacion: FechaCreacion,
  FechaModificacion: FechaModificacion.default(Date.now).required(),
  Administrador: Administrador,
});

const getUsuario = Joi.object({
  _id: _id.required(),
});

module.exports = { createUsuario, updateUsuario, getUsuario };
