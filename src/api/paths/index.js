const user = require('./user');

module.exports = {
    '/users': user.users,
    '/users/{username}': user.users,
    '/signin': user.signIn,
    '/signup': user.signUp,
    '/signout': user.signOut,
}