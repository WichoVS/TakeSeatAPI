const faker = require("faker");

class ReviewModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _review = {
        _id: faker.datatype.uuid(),
        UsuarioReview: faker.datatype.uuid(),
        Restaurante: faker.datatype.uuid(),
        Calificacion: faker.datatype.number(),
        Comentario: faker.lorem.sentence(),
        FechaCalificacion: faker.date.past(),
        FechaVisita: faker.date.past(),
        Activo: faker.datatype.boolean(),
      };

      this.docs.push(_review);
    }
  }
}

module.exports = ReviewModel;
