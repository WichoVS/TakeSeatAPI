const Pais = require("./pais.model");

const GetAll = async (req, res, next) => {
  try {
    const paisesArr = await Pais.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paisesArr,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const paisById = await Pais.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paisById,
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

    const paisUpd = await Pais.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
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
        data: paisUpd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleStatus = async (req, res, next) => {
  try {
    const _params = req.params;

    const paisOld = await Pais.findById({ _id: _params._id }).lean().exec();
    const paisUpd = await Pais.findByIdAndUpdate(
      { _id: _params._id },
      {
        Activo: !paisOld.Activo,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paisUpd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    const newPais = await Pais.create({
      Nombre: _body.Nombre,
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
        data: newPais,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetActivePaises = async (req, res, next) => {
  try {
    const paises = await Pais.find({ Activo: true }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: paises,
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
  GetActivePaises,
};
