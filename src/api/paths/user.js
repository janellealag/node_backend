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
  400: { description: 'Bad request.' },
  401: { description: 'Not authorized.' },
  404: { description: 'Resource not found.' },
  '5XX': { description: 'Unexpected error.' },
};

module.exports = {
  users: {
    get: {
      description: 'Get users',
      operationId: 'getUsers',
      responses,
    },
    put: {
      description: 'Update user info',
      operationId: 'updateUser',
      parameters: [{
        in: 'path',
        name: 'username',
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
        name: 'username',
        schema: {
          type: 'string',
        },
        required: true
      }],
      responses,
    },
  },
  signIn: {
    post: {
      description: 'User sign in',
      operationId: 'signIn',
      parameters: [{
        in: 'body',
        name: 'body',
        schema: user.signIn,
        required: true
      }],
      responses,
    },    
  },
  signUp: {
    post: {
      description: 'User sign up',
      operationId: 'signUp',
      parameters: [{
        in: 'body',
        name: 'body',
        schema: user.signUp,
        required: true
      }],
      responses,
    },
  },
}