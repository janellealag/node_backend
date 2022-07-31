const paths = require('./paths');
const servers = require('./servers');

const apiDoc = {
  openapi: '3.0.3',
  info: {
    title: 'Backend Service',
    version: '1.0.0',
  },
  paths,
  servers,
  components: {
    securitySchemes: {
      jwt: {
        type: 'apiKey',
        in: 'header',
        name: 'x-access-token',
      },
    },
  },
};

module.exports = { apiDoc };