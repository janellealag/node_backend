module.exports = {
    signIn: {
      type: 'object',
      required: ['username', 'password'],
      properties: {
        username: {
          description: 'Must be 3 to 30 alphanumeric characters long, including dash, underscore, and dot. Must start with a letter.',
          type: 'string',
          // pattern: '(?=^[a-zA-Z]+)^[a-zA-Z0-9\\.\\-_]{3,30}$',
        },
        password: {
          description: 'Must be 8 to 30 characters long. Must include a number, lowercase and uppercase letters',
          type: 'string',
          // pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^.{8,30}$',
        },
      },
    },
    updateUser: {
      type: 'object',
      properties: {
        username: {
          description: 'Name of the user',
          type: 'string',
        },
      },
    },
    signUp: {
      type: 'object',
      required: ['username', 'password', 'email'],
      properties: {
        username: {
          description: 'Name of the user',
          type: 'string',
        },
        password: {
          description: 'Must be 8 to 30 characters long. Must include a number, lowercase and uppercase letters',
          type: 'string',
          // pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^.{8,30}$',
        },
        email: {
          description: 'Email of the user',
          type: 'string',
        },
      },
    },
  };
  