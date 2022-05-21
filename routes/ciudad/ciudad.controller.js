const Ciudad = require("./ciudad.model");

const GetActives = async (req, res, next) => {
  try {
    const ciudades = await Ciudad.find({ Activo: true }).lean().exec();
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: ciudades,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetAll = async (req, res, next) => {
  try {
    const ciudades = await Ciudad.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: ciudades,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const ciudad = await Ciudad.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: ciudad,
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

    const updCiudad = await Ciudad.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
        Estado: _body.Estado,
        FechaModificacion: new Date(),
        UsuarioModifico: _body.UsuarioModifico,
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: updCiudad,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleStatus = async (req, res, next) => {
  try {
    const _params = req.params;

    const oldCiudad = await Ciudad.findById({ _id: _params._id }).lean().exec();
    const newCiudad = await Ciudad.findByIdAndUpdate(
      { _id: _params._id },
      {
        Activo: !oldCiudad.Activo,
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newCiudad,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    const newCiudad = await Ciudad.create({
      Nombre: _body.Nombre,
      Estado: _body.Estado,
      FechaCreacion: new Date(),
      UsuarioCreo: _body.UsuarioCreo,
      Activo: true,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newCiudad,
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
  GetActives,
  ToggleStatus,
};
