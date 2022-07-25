const user = require('./user');

module.exports = {
    '/users': user.users,
    '/users/{name}': user.users,
}