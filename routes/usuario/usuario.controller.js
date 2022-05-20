const boom = require("@hapi/boom");
const Restaurante = require("../restaurante/restaurante.model");
const Usuario = require("./usuario.model");

const GetAll = async (req, res, next) => {
  try {
    const usuarios = await Usuario.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: usuarios,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    let user = await Usuario.findById({ _id: _params._id })
      .select("Nombre Usuario Correo Imagen")
      .lean()
      .exec();
    if (user === null) throw boom.notFound("No se encontró el usuario con este Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: user,
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

    const updUsuario = await Usuario.findByIdAndUpdate(
      { _id: _params._id },
      {
        Imagen: _body.Imagen,
        Nombre: _body.Nombre,
        Correo: _body.Correo,
        Usuario: _body.Usuario,
        Password: _body.Password,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: updUsuario,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetUsuarioRestaurante = async (req, res, next) => {
  try {
    const _p = req.params;

    const restaurante = await Restaurante.findOne({
      Administrador: _p._id,
    })
      .lean()
      .exec();

    if (restaurante === null) {
      res
        .send({
          success: true,
          message: "Petición Exitosa",
          data: "",
        })
        .end();
    } else {
      res
        .send({
          success: true,
          message: "Petición Exitosa",
          data: restaurante._id,
        })
        .end();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAll,
  GetById,
  Update,
  GetUsuarioRestaurante,
};
