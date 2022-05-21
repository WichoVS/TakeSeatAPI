const mongoose = require("mongoose");

const Conectar = () => {
  return mongoose.connect(
    "mongodb+srv://admin:admin@take-seat-api.4a1nr.mongodb.net/takeSeat?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = Conectar();
