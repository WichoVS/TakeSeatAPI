const Reservacion = require("./reservacion.model");

const CreateReservacion = async (req, res, next) => {
  try {
    const _b = req.body;

    const newReservacion = await Reservacion.create({
      UsuarioReservo: _b.UsuarioReservo,
      Restaurante: _b.Restaurante,
      Horario: _b.Horario,
      Dia: new Date(_b.Dia).toISOString(),
      Costo: _b.Costo,
      FechaCreacion: new Date(),
      FechaModificacion: null,
      Activo: _b.Activo,
      Pagado: _b.Pagado,
    });

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newReservacion,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetAllReservaciones = async (req, res, next) => {
  try {
    const reservaciones = await Reservacion.find({}).lean().exec();
    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservaciones,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetByIdReservacion = async (req, res, next) => {
  try {
    const reservacion = await Reservacion.findById({ _id: req.params._id }).lean().exec();

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservacion,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const UpdateReservacion = async (req, res, next) => {
  try {
    const _p = req.params;
    const _b = req.body;

    const reservacionNew = await Reservacion.findByIdAndUpdate(
      { _id: _p._id },
      {
        Horario: _b.Horario,
        Dia: _b.Dia,
        FechaModificacion: _b.FechaModificacion,
        Activo: _b.Activo,
        Pagado: _b.Pagado,
      },
      { new: true }
    );

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservacionNew,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetReservacionesByRestaurante = async (req, res, next) => {
  try {
    const _p = req.params;

    const reservaciones = await Reservacion.find({ Restaurante: _p._id }).lean().exec();

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservaciones,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetReservacionesByUser = async (req, res, next) => {
  try {
    const _p = req.params;

    const reservaciones = await Reservacion.find({ UsuarioReservo: _p._id }).lean().exec();

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservaciones,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const CancelarReservacion = async (req, res, next) => {
  try {
    const _p = req.params;

    const reservacion = await Reservacion.findByIdAndUpdate(
      { _id: _p._id },
      {
        Activo: false,
      },
      {
        new: true,
      }
    );

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservacion,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const PagarReservacion = async (req, res, next) => {
  try {
    const _p = req.params;

    const reservacion = await Reservacion.findByIdAndUpdate(
      { _id: _p._id },
      {
        Pagado: true,
      },
      {
        new: true,
      }
    );

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservacion,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetMisReservaciones = async (req, res, next) => {
  try {
    const _p = req.params;
    const reservaciones = await Reservacion.find({ UsuarioReservo: _p })
      .populate("Restaurante", "Nombre")
      .lean()
      .exec();

    res
      .status(200)
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservaciones,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CreateReservacion,
  GetAllReservaciones,
  GetByIdReservacion,
  UpdateReservacion,
  GetReservacionesByRestaurante,
  GetReservacionesByUser,
  CancelarReservacion,
  PagarReservacion,
  GetMisReservaciones,
};
