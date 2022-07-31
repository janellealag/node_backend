const jwt = require('jsonwebtoken');

module.exports = {
  jwt: function jwtHandler(req, scopes, securityDefinition) {
    
    return new Promise((resolve, reject) => {
      const token = req.headers['x-access-token'];
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { 
          if (err) {
            reject(err);
          }
          resolve(true);
        });
      } else {
        const error = new Error('Missing token in header');
        error.status = 403;
        reject(error);
      }
    })
  }
}