const faker = require("faker");

class ReservacionModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _reservacion = {
        _id: faker.datatype.uuid(),
        NoReservacion: faker.datatype.number(),
        UsuarioReservo: faker.datatype.uuid(),
        Restaurante: faker.datatype.uuid(),
        Horario: faker.time.recent(),
        Dia: faker.date.soon(),
        Costo: faker.datatype.number(),
        FechaCreacion: faker.date.past(),
        FechaModificacion: faker.date.recent(),
        Activo: faker.datatype.boolean(),
      };

      this.docs.push(_reservacion);
    }
  }
}

module.exports = ReservacionModel;
