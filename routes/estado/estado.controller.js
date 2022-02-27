const boom = require("@hapi/boom");
const faker = require("faker");
const EstadoModel = require("./estado.model");

const estados = new EstadoModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: estados.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _estado = estados.docs.find((e) => e._id == _params.id);
    if (!_estado) throw boom.notFound("No se encontró el estado con ese Id");

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _estado,
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
    var edoToUpd = estados.docs.findIndex((e) => e._id == _params.id);
    if (edoToUpd == -1) throw boom.notFound("No se encontró un estado con ese Id");
    estados.docs[edoToUpd] = _body;
    const edoUptd = estados.docs[edoToUpd];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: edoUptd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var edoToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Pais: faker.datatype.uuid(),
      FechaCreacion: faker.date.past(),
      UsuarioCreo: faker.datatype.uuid(),
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    };
    estados.docs.push(edoToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: edoToCreate,
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
