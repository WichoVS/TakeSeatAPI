const mongoose = require("mongoose");

const Conectar = () => {
  return mongoose.connect("{String de conexion Aquí}", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = Conectar();
