const Joi = require("joi");

// _id: faker.datatype.uuid(),
// Nombre: faker.company.companyName(),
// Administrador: `${faker.name.firstName()} ${faker.name.lastName()}`,
// Ubicacion: faker.internet.url(),
// Pais: faker.datatype.uuid(),
// Estado: faker.datatype.uuid(),
// Ciudad: faker.datatype.uuid(),
// Imagen: faker.image.business(),
// HorarioApertura: faker.time.recent(),
// HorarioCierre: faker.time.recent(),
// PrecioReservacion: faker.commerce.price(),
// LugaresTotales: faker.datatype.number(),
// FechaCreacion: faker.date.past(),
// FechaModificacion: faker.date.recent(),
// Activo: faker.datatype.boolean(),

const _id = Joi.string();
const Nombre = Joi.string();
const Categoria = Joi.string();
const Administrador = Joi.string();
const Ubicacion = Joi.string();
const Pais = Joi.string();
const Estado = Joi.string();
const Ciudad = Joi.string();
const Imagen = Joi.string();
const HorarioApertura = Joi.number();
const HorarioCierre = Joi.number();
const PrecioReservacion = Joi.number().min(0);
const LugaresTotales = Joi.number().min(1);
const UsuarioCreo = Joi.string();
const FechaCreacion = Joi.date();
const UsuarioModifico = Joi.string();
const FechaModificacion = Joi.date().greater(Joi.ref("FechaCreacion"));
const Activo = Joi.boolean();
const Restaurante = Joi.string();

const Fecha = Joi.date();
const Hora = Joi.number();

const createRestaurante = Joi.object({
  _id: _id.allow(null, ""),
  Nombre: Nombre.required(),
  Categoria: Categoria.required(),
  Administrador: Administrador.required(),
  Ubicacion: Ubicacion.required(),
  Pais: Pais.required(),
  Estado: Estado.required(),
  Ciudad: Ciudad.required(),
  Imagen: Imagen.required(),
  HorarioApertura: HorarioApertura.required(),
  HorarioCierre: HorarioCierre.required(),
  PrecioReservacion: PrecioReservacion.required(),
  LugaresTotales: LugaresTotales.required(),
  UsuarioCreo: UsuarioCreo.required(),
  FechaCreacion: FechaCreacion.optional().allow(null),
  UsuarioModifico: UsuarioModifico.optional().allow(null, ""),
  FechaModificacion: FechaModificacion.optional().allow(null),
  Activo: Activo.default(true).required(),
});

const updateRestaurante = Joi.object({
  _id: _id.required(),
  Nombre: Nombre,
  Categoria: Categoria,
  Administrador: Administrador,
  Ubicacion: Ubicacion,
  Pais: Pais,
  Estado: Estado,
  Ciudad: Ciudad,
  Imagen: Imagen,
  HorarioApertura: HorarioApertura,
  HorarioCierre: HorarioCierre,
  PrecioReservacion: PrecioReservacion,
  LugaresTotales: LugaresTotales,
  UsuarioCreo: UsuarioCreo.allow(null),
  FechaCreacion: FechaCreacion.allow(null),
  UsuarioModifico: UsuarioModifico.required(),
  FechaModificacion: FechaModificacion.allow(null, ""),
  Activo: Activo,
});

const getRestaurante = Joi.object({
  _id: _id.required(),
});

const getRestauranteInfoReservacion = Joi.object({
  _id: _id.required(),
  Fecha: Fecha.required(),
  Hora: Hora.required(),
});

const getRestauranteByFilter = Joi.object({
  Restaurante: Restaurante.allow(""),
  Categoria: Restaurante.allow(""),
});

module.exports = {
  createRestaurante,
  updateRestaurante,
  getRestaurante,
  getRestauranteInfoReservacion,
  getRestauranteByFilter,
};
