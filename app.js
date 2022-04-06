var express = require("express");
var logger = require("morgan");
var cors = require("cors");
const validatorHandler = require("./middleware/validator.handler");
const { createUsuario, loginUsuario } = require("./DTO/usuario.dto");

const { IniciarSesion, RegistrarUsuario, protect } = require("./middleware/auth");
var { boomErrorHandler, errorHandler, logsErrors } = require("./middleware/error.handler");
var categoriaRouter = require("./routes/categoria/categoria.router");
var ciudadRouter = require("./routes/ciudad/ciudad.router");
var estadoRouter = require("./routes/estado/estado.router");
var itemMenuRouter = require("./routes/item-menu/item-menu.router");
var paisRouter = require("./routes/pais/pais.router");
var promocionRouter = require("./routes/promocion/promocion.router");
var reviewRouter = require("./routes/review/review.router");
var reservacionRouter = require("./routes/reservacion/reservacion.router");
var restauranteRouter = require("./routes/restaurante/restaurante.router");
var usuarioRouter = require("./routes/usuario/usuario.router");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.post("/iniciarSesion", validatorHandler(loginUsuario, "body"), IniciarSesion);
app.post("/registrarUsuario", validatorHandler(createUsuario, "body"), RegistrarUsuario);

app.use("/api", protect);
app.use("/api/v1/categoria", categoriaRouter);
app.use("/api/v1/ciudad", ciudadRouter);
app.use("/api/v1/estado", estadoRouter);
app.use("/api/v1/item-menu", itemMenuRouter);
app.use("/api/v1/pais", paisRouter);
app.use("/api/v1/promocion", promocionRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/reservacion", reservacionRouter);
app.use("/api/v1/restaurante", restauranteRouter);
app.use("/api/v1/usuario", usuarioRouter);
app.use(logsErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
