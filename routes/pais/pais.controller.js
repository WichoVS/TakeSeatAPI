const boom = require("@hapi/boom");
const faker = require("faker");
const PaisModel = require("./pais.model");
const Paises = new PaisModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Paises.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _pais = Paises.docs.find((p) => p._id == _params.id);
    if (!_pais) throw boom.notFound("No se encontró un país con ese Id");

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _pais,
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
    var paisToUpd = Paises.docs.findIndex((p) => p._id == _params.id);
    if (paisToUpd == -1) throw boom.notFound("No se encontró un país con ese Id");
    Paises.docs[paisToUpd] = _body;
    const paisUpdated = Paises.docs[paisToUpd];

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paisUpdated,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var paisToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Pais: faker.datatype.uuid(),
      FechaCreacion: faker.date.recent(),
      UsuarioCreo: faker.datatype.uuid(),
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    };

    Paises.docs.push(paisToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paisToCreate,
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
