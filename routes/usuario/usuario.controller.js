const boom = require("@hapi/boom");
const faker = require("faker");
const UsuarioModel = require("./usuario.model");
var Usuarios = new UsuarioModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Usuarios.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _usuario = Usuarios.docs.find((u) => u._id == _params._id);
    if (!_usuario) throw boom.notFound("No se encontró el usuario con este Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _usuario,
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
    const indexDoc = Usuarios.docs.findIndex((u) => u._id == _params._id);
    if (indexDoc == -1) throw boom.notFound("No se encontró el usuario con este Id");

    Usuarios.docs[indexDoc] = _body;
    const _usuario = Usuarios.docs[indexDoc];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _usuario,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var _usuarioToCreate = {
      _id: faker.datatype.uuid(),
      Nombre: _body.Nombre,
      Usuario: _body.Usuario,
      Correo: _body.Correo,
      Imagen: faker.image.avatar(),
      Pais: faker.datatype.uuid(),
      Estado: faker.datatype.uuid(),
      Ciudad: faker.datatype.uuid(),
      Password: _body.Password,
      FechaCreacion: faker.date.past(),
      FechaModificacion: null,
      Administrador: false,
    };
    Usuarios.docs.push(_usuarioToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _usuarioToCreate,
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
