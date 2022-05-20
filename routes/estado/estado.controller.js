const Estado = require("./estado.model");

const GetActives = async (req, res, next) => {
  try {
    const estados = await Estado.find({ Activo: true }).lean().exec();
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: estados,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetAll = async (req, res, next) => {
  try {
    const estados = await Estado.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: estados,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const estado = await Estado.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: estado,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleStatus = async (req, res, next) => {
  try {
    const _params = req.params;
    const oldEstado = await Estado.findById({ _id: _params._id }).lean().exec();
    const newEstado = await Estado.findByIdAndUpdate(
      { _id: _params._id },
      {
        Activo: !oldEstado.Activo,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newEstado,
      })
      .end();
  } catch (error) {
    next(next);
  }
};

const Update = async (req, res, next) => {
  try {
    const _params = req.params;
    const _body = req.body;

    const updEstado = await Estado.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
        Pais: _body.Pais,
        FechaModificacion: new Date(),
        UsuarioModifico: _body.UsuarioModifico,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: updEstado,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    const newEstado = await Estado.create({
      Nombre: _body.Nombre,
      Pais: _body.Pais,
      FechaCreacion: new Date(),
      UsuarioCreo: _body.UsuarioCreo,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: true,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newEstado,
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
  ToggleStatus,
  GetActives,
};
