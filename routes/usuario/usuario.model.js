const faker = require("faker");

class UsuarioModel {
  constructor() {
    this.docs = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 20; index++) {
      var _usuario = {
        _id: faker.datatype.uuid(),
        Nombre: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Usuario: faker.internet.userName(),
        Correo: faker.internet.email(),
        Imagen: faker.image.avatar(),
        Pais: faker.datatype.uuid(),
        Estado: faker.datatype.uuid(),
        Ciudad: faker.datatype.uuid(),
        Password: faker.internet.password(),
        FechaCreacion: faker.date.past(),
        FechaModificacion: faker.date.recent(),
        Administrador: faker.datatype.boolean(),
      };

      this.docs.push(_usuario);
    }
  }
}

module.exports = UsuarioModel;
