const faker = require("faker");

class EstadoModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _estado = {
        _id: faker.datatype.uuid(),
        Nombre: faker.address.state(),
        Pais: faker.datatype.uuid(),
        FechaCreacion: faker.date.past(),
        UsuarioCreo: faker.datatype.uuid(),
        FechaModificacion: faker.date.recent(),
        UsuarioModifico: faker.datatype.uuid(),
        Activo: faker.datatype.boolean(),
      };

      this.docs.push(_estado);
    }
  }
}

module.exports = EstadoModel;
