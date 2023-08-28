module.exports = (condition, message, status) => {
    if (condition) {
      const error = new Error(message);
      error.status = status;
      throw error;
    }
  };