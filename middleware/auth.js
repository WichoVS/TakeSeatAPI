const jwt = require("jsonwebtoken");
const { config, expires } = require("../config/config");
const Usuario = require("../routes/usuario/usuario.model");
const boom = require("@hapi/boom");

const newToken = (Usuario) => {
  return jwt.sign({ id: Usuario._id }, config.secrets.jwt, {
    expiresIn: expires,
  });
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

const RegistrarUsuario = async (req, res, next) => {
  try {
    const user = await Usuario.create({
      Nombre: req.body.Nombre,
      Usuario: req.body.Usuario,
      Correo: req.body.Correo,
      Imagen: req.body.Imagen,
      Pais: req.body.Pais,
      Estado: req.body.Estado,
      Ciudad: req.body.Ciudad,
      Password: req.body.Password,
      FechaCreacion: req.body.FechaCreacion,
      FechaModificacion: req.body.FechaModificacion,
      Administrador: req.body.Administrador,
    });

    const token = newToken(user);
    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: { user, token },
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const IniciarSesion = async (req, res, next) => {
  try {
    const user = await Usuario.findOne({
      Usuario: req.body.Usuario,
    })
      .select("_id Nombre Usuario Correo Password")
      .lean();

    if (!user) {
      throw boom.notFound("No se encontró el usuario con este Id");
    }

    if (user.Password !== req.body.Password) {
      throw boom.unauthorized("Usuario y/o Contraseña Incorrectos");
    }

    const token = newToken(user);
    let userLog = {
      _id: user._id,
      token: token,
    };

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: userLog,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  console.log(req.body);
  try {
    if (!bearer || !bearer.startsWith("Bearer ")) {
      throw boom.unauthorized("Es necesario un Token válido");
    }

    const token = bearer.split("Bearer ")[1].trim();

    let payload;
    try {
      payload = await verifyToken(token);
    } catch (error) {
      throw boom.unauthorized("Es necesario un Token válido");
    }
    const user = await Usuario.findById(payload.id).select("-Password").lean().select();

    if (!user) {
      throw boom.unauthorized("Es necesario un Token válido");
    }

    req.Usuario = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { RegistrarUsuario, IniciarSesion, protect };
