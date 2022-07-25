module.exports = {
    signIn: {
      type: 'object',
      required: ['username', 'password', 'email'],
      properties: {
        username: {
          description: 'Must be 3 to 30 alphanumeric characters long, including dash, underscore, and dot. Must start with a letter.',
          type: 'string',
          pattern: '(?=^[a-zA-Z]+)^[a-zA-Z0-9\\.\\-_]{3,30}$',
        },
        password: {
          description: 'Must be 8 to 30 characters long. Must include a number, lowercase and uppercase letters',
          type: 'string',
          pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^.{8,30}$',
        },
        email: {
          type: 'string',
          format: 'email',
        },
      },
    },
    updateUser: {
      type: 'object',
      properties: {
        name: {
          description: 'Name of the user',
          type: 'string',
        },
      },
    },
    userList: {
      type: 'object',
      properties: {
        users: {
          type: 'array',
          items: {
            type: 'string',
            description: 'Must be 3 to 30 alphanumeric characters long, including dash, underscore, and dot. Must start with a letter.',
            pattern: '(?=^[a-zA-Z]+)^[a-zA-Z0-9\\.\\-_]{3,30}$',
          },
        },
      },
    },
    updateCurrentUser: {
      type: 'object',
      properties: {
        username: {
          description: 'Must be 3 to 30 alphanumeric characters long, including dash, underscore, and dot. Must start with a letter.',
          type: 'string',
          pattern: '(?=^[a-zA-Z]+)^[a-zA-Z0-9\\.\\-_]{3,30}$',
        },
        currentPassword: {
          description: 'Must be 8 to 30 characters long. Must include a number, lowercase and uppercase letters',
          type: 'string',
        },
        newPassword: {
          description: 'Must be 8 to 30 characters long. Must include a number, lowercase and uppercase letters',
          type: 'string',
          pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^.{8,30}$',
        },
        email: {
          type: 'string',
          format: 'email',
        },
        role: {
          description: 'Role of the user',
          type: 'string',
        },
      },
    },
    newUser: {
      type: 'object',
      required: ['name'],
      properties: {
        name: {
          description: 'Name of the user',
          type: 'string',
        },
      },
    },
  };
  