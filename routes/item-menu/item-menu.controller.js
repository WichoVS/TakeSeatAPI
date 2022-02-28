const boom = require("@hapi/boom");
const faker = require("faker");
const ItemMenuModel = require("./item-menu.model");
var Items = new ItemMenuModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Items.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _item = Items.docs.find((i) => i._id == _params._id);
    if (!_item) throw boom.notFound("No se encontró ningún item con ese Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _item,
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
    var itemToUpdate = Items.docs.findIndex((i) => i._id == _params._id);
    if (itemToUpdate == -1) throw boom.notFound("No se encontró ningún item con ese Id");

    Items.docs[itemToUpdate] = _body;
    const itemUpdated = Items.docs[itemToUpdate];

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: itemUpdated,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var itemToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Descripcion: _body.Descripcion,
      Restaurante: faker.datatype.uuid(),
      Costo: parseInt(faker.commerce.price()),
      Imagen: faker.image.food(),
      FechaCreacion: faker.date.recent(),
      FechaModificacion: null,
      Activo: true,
    };

    Items.docs.push(itemToCreate);

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: itemToCreate,
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
