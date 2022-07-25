const user = require('../definitions/user');

const responses = {
  200: {
    description: 'Success',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            status: {
              type: 'string',
              enum: ['success', 'error', 'fail'],
            },
            data: {
              type: 'object',
            },
          },
        },
      },
    },
  },
  // ...errors,
};

module.exports = {
  users: {
    get: {
      description: 'Get users',
      operationId: 'getUsers',
      responses,
    },
    post: {
      description: 'Create new user',
      operationId: 'newUser',
      parameters: [{
        in: 'body',
        name: 'body',
        schema: user.newUser,
        required: false,
      }],
      responses,
    },
    put: {
      description: 'Update user info',
      operationId: 'updateUser',
      parameters: [{
        in: 'path',
        name: 'name',
        schema: {
          type: 'string',
        },
        required: true
      }, {
        in: 'body',
        name: 'body',
        schema: user.updateUser,
        required: true,
      }],
      responses,
    },
    delete: {
      description: 'Delete user',
      operationId: 'deleteUser',
      parameters: [{
        in: 'path',
        name: 'name',
        schema: {
          type: 'string',
        },
        required: true
      }],
      responses,
    }
  },
}