const Descripcion = require("./descripcion.model");

const GetDescripcion = async (req, res, next) => {
  try {
    const id = req.params._idRestaurante;

    const desc = await Descripcion.findOne({ Restaurante: id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: desc,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const CreateDescripcion = async (req, res, next) => {
  try {
    const _b = req.body;

    const desc = await Descripcion.create({
      Restaurante: _b.Restaurante,
      Descripcion: _b.Descripcion,
      Slogan: _b.Slogan,
      FechaCreacion: new Date(),
      UsuarioCreo: _b.UsuarioCreo,
      FechaModificacion: null,
      UsuarioModifico: null,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: desc,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const UpdateDescripcion = async (req, res, next) => {
  try {
    const _b = req.body;
    const id = req.params._idRestaurante;

    const desc = await Descripcion.findOneAndUpdate(
      { Restaurante: id },
      {
        Descripcion: _b.Descripcion,
        Slogan: _b.Slogan,
        FechaModificacion: new Date(),
        UsuarioModifico: _b.UsuarioModifico,
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: desc,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetDescripcion,
  CreateDescripcion,
  UpdateDescripcion,
};
