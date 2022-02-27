const faker = require("faker");

class PromocionModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _promocion = {
        _id: faker.datatype.uuid(),
        Nombre: faker.commerce.productAdjective(),
        Descripcion: faker.commerce.productDescription(),
        Restaurante: faker.datatype.uuid(),
        Imagen: faker.image.business(),
        FechaInicio: faker.date.recent(),
        FechaFin: faker.date.future(),
        FechaCreacion: faker.date.past(),
        FechaModificacion: faker.date.recent(),
        Activo: faker.datatype.boolean(),
      };

      this.docs.push(_promocion);
    }
  }
}

module.exports = PromocionModel;
