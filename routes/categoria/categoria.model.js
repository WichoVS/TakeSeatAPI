const faker = require("faker");

class CategoriaModel {
  constructor() {
    this.categorias = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _categoria = {
        _id: faker.datatype.uuid(),
        Nombre: faker.commerce.department(),
        Descripcion: faker.lorem.sentence(),
        FechaCreacion: faker.date.past(),
        UsuarioCreo: faker.datatype.uuid(),
        FechaModificacion: faker.date.recent(),
        UsuarioModificacion: faker.datatype.uuid(),
        Activo: faker.datatype.boolean(),
      };

      this.categorias.push(_categoria);
    }
  }
}

module.exports = CategoriaModel;
