const boom = require("@hapi/boom");
const faker = require("faker");
const CategoriaModel = require("./categoria.model");

var categorias = new CategoriaModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: categorias.categorias,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const categoria = categorias.categorias.find((categoria) => categoria._id === _params.id);
    if (!categoria) {
      throw boom.notFound("No se ha encontrado ninguna categoria con ese Id");
    } else {
      res
        .send({
          success: true,
          message: "Petición Exitosa",
          data: categoria,
        })
        .end();
    }
  } catch (error) {
    next(error);
  }
};

const Update = async (req, res, next) => {
  try {
    const _params = req.params;
    const _body = req.body;
    var categoriaToUpd = categorias.categorias.findIndex((c) => c._id == _params.id);
    if (categoriaToUpd == -1)
      throw boom.notFound("No se ha encontrado ninguna categoria con ese Id");
    categorias.categorias[categoriaToUpd] = _body;
    const catUpdated = categorias.categorias[categoriaToUpd];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: catUpdated,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var objToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Descripcion: _body.Descripcion,
      FechaCreacion: faker.date.recent(),
      UsuarioCreo: faker.datatype.uuid(),
      FechaModificacion: null,
      UsuarioModificacion: null,
    };

    categorias.categorias.push(objToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: objToCreate,
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
