const { user: User } = require('../models');
const { update } = require('../models/user.model');

module.exports = {
  getUsers: async () => {
    const allUsers = await User.find({});
    return allUsers;
  },
  signUp: async (username, password, email) => {
    const newUser = new User ({
      username, password, email
    });
    await newUser.save();
    console.log(`[signUp] Created new user`);
    
  },
  updateUser: async (userId, body) => {
    const updatedUser = {};
    updatedUser.username = body.username;
    await User.updateOne({_id: userId}, updatedUser);
  },
  
}