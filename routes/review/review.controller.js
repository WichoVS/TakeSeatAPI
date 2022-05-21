const Reservacion = require("../reservacion/reservacion.model");
const Review = require("./review.model");

const GetAll = async (req, res, next) => {
  try {
    const reviews = await Review.find({}).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reviews,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const review = await Review.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: review,
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

    const reviewUpd = await Review.findByIdAndUpdate(
      { _id: _params._id },
      {
        Comentario: _body.Comentario,
        FechaCalificacion: new Date().toISOString(),
        Activo: _body.Activo,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reviewUpd,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    const review = await Review.create({
      UsuarioReview: _body.UsuarioReview,
      Restaurante: _body.Restaurante,
      Comentario: _body.Comentario,
      FechaCalificacion: new Date().toISOString(),
      Activo: true,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: review,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetByRestaurante = async (req, res, next) => {
  try {
    const _p = req.params;

    const reviews = await Review.find({ Restaurante: _p._id })
      .populate("UsuarioReview", "Nombre Imagen")
      .lean()
      .exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reviews,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const CanReview = async (req, res, next) => {
  try {
    const _p = req.params;
    var permiso = false;

    const canRev = await Reservacion.findOne({
      Pagado: true,
      UsuarioReservo: _p._idUser,
      Restaurante: _p._idRestaurante,
    })
      .lean()
      .exec();

    if (canRev !== null) permiso = true;
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: permiso,
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
  GetByRestaurante,
  CanReview,
};
