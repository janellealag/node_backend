const user = require('./user');

module.exports = {
    '/users': user.users,
    '/users/current': user.currentUser,
    '/users/{username}': user.users,
    '/signin': user.signIn,
    '/signup': user.signUp,
    '/signout': user.signOut,
}