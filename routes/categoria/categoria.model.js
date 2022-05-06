const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    FechaCreacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioCreo: {
      type: String,
      required: false,
      ref: "Usuario",
    },
    FechaModificacion: {
      type: mongoose.SchemaTypes.Date,
      required: false,
    },
    UsuarioModifico: {
      type: String,
      ref: "Usuario",
    },
    Activo: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false }
);

CategoriaSchema.index({ Nombre: 1 }, { unique: true });

const Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;

// const faker = require("faker");
// class CategoriaModel {
//   constructor() {
//     this.categorias = [];
//     this.generate();
//   }

//   generate() {
//     for (let index = 0; index < 20; index++) {
//       var _categoria = {
//         _id: faker.datatype.uuid(),
//         Nombre: faker.commerce.department(),
//         Descripcion: faker.lorem.sentence(),
//         FechaCreacion: faker.date.past(),
//         UsuarioCreo: faker.datatype.uuid(),
//         FechaModificacion: faker.date.recent(),
//         UsuarioModifico: faker.datatype.uuid(),
//         Activo: faker.datatype.boolean(),
//       };

//       this.categorias.push(_categoria);
//     }
//   }
// }

// module.exports = CategoriaModel;
