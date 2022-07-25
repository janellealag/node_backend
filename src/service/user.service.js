const { user: User } = require('../models');
const { update } = require('../models/user.model');

module.exports = {
  getUsers: async () => {
    const allUsers = await User.find({});
    return allUsers;
  },
  newUser: async (name) => {
    const newUser = new User ({
      name
    });
    await newUser.save();
    console.log(`[newUser] Created new user`);
    
  },
  updateUser: async (userId, body) => {
    const updatedUser = {};
    updatedUser.name = body.name;
    await User.updateOne({_id: userId}, updatedUser);
  }
  
}