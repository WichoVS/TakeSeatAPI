const faker = require("faker");

class RestauranteModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _restaurante = {
        _id: faker.datatype.uuid(),
        Nombre: faker.company.companyName(),
        Administrador: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Ubicacion: faker.internet.url(),
        Pais: faker.datatype.uuid(),
        Estado: faker.datatype.uuid(),
        Ciudad: faker.datatype.uuid(),
        Imagen: faker.image.business(),
        HorarioApertura: faker.time.recent(),
        HorarioCierre: faker.time.recent(),
        PrecioReservacion: faker.commerce.price(),
        LugaresTotales: faker.datatype.number(),
        FechaCreacion: faker.date.past(),
        FechaModificacion: faker.date.recent(),
      };

      this.docs.push(_restaurante);
    }
  }
}

module.exports = RestauranteModel;
