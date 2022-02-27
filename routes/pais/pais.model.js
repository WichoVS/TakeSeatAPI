const faker = require("faker");

class PaisModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _pais = {
        _id: faker.datatype.uuid(),
        Nombre: faker.address.country(),
        FechaCreacion: faker.date.past(),
        UsuarioCreo: faker.datatype.uuid(),
        FechaModificacion: faker.date.recent(),
        UsuarioModifico: faker.datatype.uuid(),
      };

      this.docs.push(_pais);
    }
  }
}

module.exports = PaisModel;
