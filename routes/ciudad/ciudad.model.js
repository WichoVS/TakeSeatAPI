const faker = require("faker");

class CiudadModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _ciudad = {
        _id: faker.datatype.uuid(),
        Nombre: faker.address.city(),
        Estado: faker.datatype.uuid(),
        FechaCreacion: faker.date.past(),
        UsuarioCreo: faker.datatype.uuid(),
        FechaModificacion: faker.date.recent(),
        UsuarioModificacion: faker.datatype.uuid(),
        Activo: faker.datatype.boolean(),
      };

      this.docs.push(_ciudad);
    }
  }
}

module.exports = CiudadModel;
