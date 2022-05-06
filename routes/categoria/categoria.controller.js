const Categoria = require("./categoria.model");

const GetAll = async (req, res, next) => {
  try {
    const cats = await Categoria.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: cats,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const catUpd = await Categoria.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: catUpd,
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
    const catUpd = await Categoria.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
        Descripcion: _body.Descripcion,
        FechaModificacion: new Date(),
        UsuarioModifico: _body.UsuarioModifico,
        Activo: _body.Activo,
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: catUpd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleStatus = async (req, res, next) => {
  try {
    const _params = req.params;

    const oldCat = await Categoria.findById({ _id: _params._id }).lean().exec();

    const catUpd = await Categoria.findByIdAndUpdate(
      { _id: _params._id },
      { Activo: !oldCat.Activo },
      { new: true }
    );
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: catUpd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    const newCat = await Categoria.create({
      Nombre: _body.Nombre,
      Descripcion: _body.Descripcion,
      FechaCreacion: new Date(),
      UsuarioCreo: _body.UsuarioCreo,
      FechaModificacion: null,
      UsuarioModifico: null,
      Activo: _body.Activo,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newCat,
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
};
