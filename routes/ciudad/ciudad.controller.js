const boom = require("@hapi/boom");
const faker = require("faker");
const CiudadModel = require("./ciudad.model");

var ciudades = new CiudadModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: ciudades.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _ciudad = ciudades.docs.find((c) => c._id === _params._id);
    if (!_ciudad) {
      throw boom.notFound("No se encontró ninguna ciudad con ese Id");
    }
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _ciudad,
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
    var catToUpd = ciudades.docs.findIndex((c) => c._id == _params._id);
    if (catToUpd == -1) throw boom.notFound("No se encontró ninguna ciudad con ese Id");
    ciudades.docs[catToUpd] = _body;
    const _cityUptd = ciudades.docs[catToUpd];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _cityUptd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var cityToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Estado: faker.datatype.uuid(),
      FechaCreacion: faker.date.recent(),
      UsuarioCreo: faker.datatype.uuid(),
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    };

    ciudades.docs.push(cityToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: cityToCreate,
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
