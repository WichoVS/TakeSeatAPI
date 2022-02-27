//var createError = require("http-errors");
var express = require("express");
//var path = require("path");
//var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

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
// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/categoria", categoriaRouter);
app.use("/api/v1/ciudad", ciudadRouter);
app.use("/api/v1/estado", estadoRouter);
app.use("/api/v1/item-menu", itemMenuRouter);
app.use("/api/v1/pais", paisRouter);
app.use("/api/v1/promocion", promocionRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/reservacion", reservacionRouter);
app.use("/api/v1/restaurante", restauranteRouter);
app.use("/api/v1/usuarioRouter", usuarioRouter);
app.use(logsErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

module.exports = app;
