const boom = require("@hapi/boom");
const faker = require("faker");
const ReviewModel = require("./review.model");
var Reviews = new ReviewModel();

const GetAll = async (req, res, next) => {
  try {
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Reviews.docs,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetById = async (req, res, next) => {
  try {
    const _params = req.params;
    const _review = Reviews.docs.find((r) => r._id == _params._id);
    if (!_review) throw boom.notFound("No se encontró la Review con esta Id");
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _review,
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
    const indexDoc = Reviews.docs.findIndex((r) => r._id == _params._id);
    if (indexDoc == -1) throw boom.notFound("No se encontró la Review con esta Id");
    Reviews.docs[indexDoc] = _body;
    const _review = Reviews.docs[indexDoc];
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: _review,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const Create = async (req, res, next) => {
  try {
    const _body = req.body;
    var reviewToCreate = {
      _id: faker.datatype.uuid(),
      UsuarioReview: faker.datatype.uuid(),
      Restaurante: faker.datatype.uuid(),
      Calificacion: _body.Calificacion,
      Comentario: _body.Comentario,
      FechaCalificacion: faker.date.past(),
      FechaVisita: faker.date.past(),
      Activo: true,
    };
    Reviews.docs.push(reviewToCreate);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: reviewToCreate,
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
