const boom = require("@hapi/boom");
const faker = require("faker");
const RestauranteModel = require("./restaurante.model");
const Restaurantes = new RestauranteModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Restaurantes.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _restaurante = Restaurantes.docs.find((r) => r._id == _params.id);
    if (!_restaurante) throw boom.notFound("No se encontró un Restaurante con esa Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _restaurante,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Update = async (req, res, next) => {
  try {
    const _params = req.params;
    const _body = req.body;
    const indexDoc = Restaurantes.docs.find((r) => r._id == _params.id);
    if (indexDoc == -1) throw boom.notFound("No se encontró un Restaurante con esa Id");

    Restaurantes.docs[indexDoc] = _body;
    const _restaurante = Restaurantes.docs[indexDoc];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _restaurante,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var restauranteToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Administrador: _body.Administrador,
      Ubicacion: _body.Ubicacion,
      Pais: faker.datatype.uuid(),
      Estado: faker.datatype.uuid(),
      Ciudad: faker.datatype.uuid(),
      Imagen: faker.image.business(),
      HorarioApertura: faker.time.recent(),
      HorarioCierre: faker.time.recent(),
      PrecioReservacion: faker.commerce.price(),
      LugaresTotales: _body.LugaresTotales,
      FechaCreacion: faker.date.recent(),
      FechaModificacion: null,
      Activo: true,
    };

    Restaurantes.docs.push(restauranteToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: restauranteToCreate,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAll,
  GetById,
  Update,
  Create,
};
