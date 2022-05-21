const logsErrors = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  next(err);
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }

  next(err);
};

const errorHandler = (err, req, res) => {
  res
    .status(500)
    .json({
      message: err.message,
      stack: err.stack,
    })
    .end();
};

module.exports = {
  logsErrors,
  errorHandler,
  boomErrorHandler,
};
