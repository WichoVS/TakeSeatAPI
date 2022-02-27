const boom = require("@hapi/boom");
const faker = require("faker");
const ReservacionModel = require("./reservacion.model");
const Reservaciones = new ReservacionModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Reservaciones.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _reservacion = Reservaciones.docs.find((r) => r._id == _params.id);
    if (!_reservacion) throw boom.notFound("No se encontró la reservación con ese Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _reservacion,
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
    const indexDoc = Reservaciones.docs.findIndex((r) => r._id == _params.id);
    if (indexDoc == -1) throw boom.notFound("No se encontró la reservación con ese Id");
    Reservaciones.docs[indexDoc] = _body;
    const _reservacion = Reservaciones.docs[indexDoc];

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _reservacion,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const _body = req.body;
    var reservacionToCreate = {
      _id: faker.datatype.uuid(),
      NoReservacion: faker.datatype.number(),
      UsuarioReservo: faker.datatype.uuid(),
      Restaurante: faker.datatype.uuid(),
      Horario: faker.time.recent(),
      Dia: faker.date.soon(),
      Costo: faker.datatype.number(),
      FechaCreacion: faker.date.past(),
      FechaModificacion: faker.date.recent(),
      Activo: true,
    };
    Reservaciones.docs.push(reservacionToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reservacionToCreate,
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
