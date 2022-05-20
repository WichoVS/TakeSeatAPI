const Reservacion = require("../reservacion/reservacion.model");
const Restaurante = require("./restaurante.model");
var ObjectId = require("mongoose").Types.ObjectId;

const GetAll = async (req, res, next) => {
  try {
    const restaurantes = await Restaurante.find({})
      .populate("Administrador", "Nombre")
      .populate("Categoria", "Nombre")
      .populate("Pais", "Nombre")
      .populate("Estado", "Nombre")
      .populate("Ciudad", "Nombre")
      .lean()
      .exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: restaurantes,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;

    const restaurante = await Restaurante.findById({ _id: _params._id })
      .populate("Administrador", "Nombre")
      .populate("Categoria", "Nombre")
      .populate("Pais", "Nombre")
      .populate("Estado", "Nombre")
      .populate("Ciudad", "Nombre")
      .lean()
      .exec();
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: restaurante,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleStatus = async (req, res, next) => {
  try {
    const _params = req.params;

    const restaurante = await Restaurante.findById({ _id: _params._id }).lean().exec();
    const restauranteUpd = await Restaurante.findByIdAndUpdate(
      { _id: _params._id },
      {
        Activo: !restaurante.Activo,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: restauranteUpd,
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

    const updRestaurante = await Restaurante.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
        Ubicacion: _body.Ubicacion,
        Pais: _body.Pais,
        Estado: _body.Estado,
        Ciudad: _body.Ciudad,
        Imagen: _body.Imagen,
        HorarioApertura: _body.HorarioApertura,
        HorarioCierre: _body.HorarioCierre,
        PrecioReservacion: _body.PrecioReservacion,
        LugaresTotales: _body.LugaresTotales,
        UsuarioModifico: _body.UsuarioModifico,
        FechaModificacion: new Date(),
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: updRestaurante,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;

    var newRestaurante = await Restaurante.create({
      Nombre: _body.Nombre,
      Categoria: _body.Categoria,
      Administrador: _body.Administrador,
      Ubicacion: _body.Ubicacion,
      Pais: _body.Pais,
      Estado: _body.Estado,
      Ciudad: _body.Ciudad,
      Imagen: _body.Imagen,
      HorarioApertura: _body.HorarioApertura,
      HorarioCierre: _body.HorarioCierre,
      PrecioReservacion: _body.PrecioReservacion,
      LugaresTotales: _body.LugaresTotales,
      UsuarioCreo: _body.UsuarioCreo,
      FechaCreacion: new Date(),
      UsuarioModifico: null,
      FechaModificacion: null,
      Activo: true,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newRestaurante,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetRestauranteInfoReservacion = async (req, res, next) => {
  try {
    const _b = req.body;
    var info = {
      LugaresDisponibles: 0,
      HorarioApertura: 0,
      HorarioCierre: 0,
      Costo: 0,
    };

    const _dia = new Date(_b.Fecha);
    var query = {
      Restaurante: new ObjectId(_b._id),
      Horario: _b.Hora,
      Dia: _dia.toISOString(),
      Activo: true,
    };
    const reservaciones = await Reservacion.find(query).lean().exec();

    const infoRest = await Restaurante.findById({ _id: _b._id }).lean().exec();

    info.HorarioApertura = infoRest.HorarioApertura;
    info.HorarioCierre = infoRest.HorarioCierre;
    info.LugaresDisponibles = infoRest.LugaresTotales - reservaciones.length;
    info.Costo = infoRest.PrecioReservacion;

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: info,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetRestauranteByFilter = async (req, res, next) => {
  try {
    const _b = req.body;

    const query = { Nombre: { $regex: ".*" + _b.Restaurante + ".*" } };
    if (_b.Categoria !== "") query.Categoria = _b.Categoria;

    const restaurantes = await Restaurante.find(query).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: restaurantes,
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
  GetRestauranteInfoReservacion,
  GetRestauranteByFilter,
};
