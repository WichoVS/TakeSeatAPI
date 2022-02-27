const faker = require("faker");

class ItemMenuModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _item = {
        _id: faker.datatype.uuid(),
        Nombre: faker.commerce.product(),
        Descripcion: faker.lorem.sentence(),
        Restaurante: faker.company.companyName(),
        Costo: parseInt(faker.commerce.price()),
        Imagen: faker.image.food(),
        FechaCreacion: faker.date.past(),
        FechaModificacion: faker.date.recent(),
      };

      this.docs.push(_item);
    }
  }
}

module.exports = ItemMenuModel;
