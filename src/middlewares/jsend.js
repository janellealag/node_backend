module.exports = (req, res, next) => {
    res.jsend = {
      success: (data, statusCode) => {
        res.status(statusCode || 200)
          .send({
            status: 'success',
            data,
          });
      },
      fail: (data, statusCode) => {
        res.status(statusCode || 400)
          .send({
            status: 'fail',
            data,
          });
      },
      error: (message, code, data, statusCode) => {
        res.status(statusCode || 500)
          .send({
            status: 'error',
            message,
            code,
            data,
          });
      },
    };
    next();
  };
  