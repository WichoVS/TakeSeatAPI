const boom = require("@hapi/boom");
const faker = require("faker");
const PromocionModel = require("./promocion.model");
var Promociones = new PromocionModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Promociones.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _promo = Promociones.docs.find((p) => p._id == _params.id);
    if (!_promo) throw boom.notFound("No se encontró una promoción con ese Id");

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _promo,
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
    var indexDoc = Promociones.docs.findIndex((p) => p._id == _params.id);
    if (indexDoc == -1) throw boom.notFound("No se encontró una promoción con ese Id");
    Promociones.docs[indexDoc] = _body;
    const PromoUpdated = Promociones.docs[indexDoc];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: PromoUpdated,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var promoToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Descripcion: _body.Descripcion,
      Restaurante: faker.datatype.uuid(),
      Imagen: faker.image.business(),
      FechaInicio: faker.date.recent(),
      FechaFin: faker.date.future(),
      FechaCreacion: faker.date.recent(),
      FechaModificacion: null,
      Activo: true,
    };

    Promociones.docs.push(promoToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _body,
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
