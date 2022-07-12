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
      // security: [{ jwt: [USER_MANAGEMENT] }],
      // parameters: [{
      //   in: 'query',
      //   name: 'status',
      //   schema: {
      //     type: 'string',
      //   },
      //   required: false,
      // }],
      responses,
    }
  }
}