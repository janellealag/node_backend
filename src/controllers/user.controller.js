const { user: User } = require('../models');
const userService = require('../service/user.service');

module.exports = {
  getUsers: async (req, res) => {
    try {
      console.log(`[getUsers] Get Users`);
      const users = await userService.getUsers();
      res.send(users);
    } catch (error) {
      console.log(`[getUsers] Error: ${error}`);
    }
  },
  newUser: async (req, res) => {
    try {
      console.log(`[newUser] Creating new user`);

      const { name } = req.body;

      const userExists = await User.findOne({name});
      if (userExists) {
        res.send('Error: User already exists');
      } else {
        await userService.newUser(req.body.name);
      }
      res.send('Successful registration');

    } catch (error) {
      console.log(`[newUser] Error: ${error}`);
    }
  },
  updateUser: async (req, res) => {
    try {
      console.log(`[updateUser] Updating new user`);
      const { name } = req.params;

      const user = await User.findOne({name});
      if (!user) {
        res.send(`Error: No user ${name}`);
      } else {
        await userService.updateUser(user._id, req.body);
      }
      res.send(`User ${name} successfully updated.`);
    } catch (error) {
      console.log(`[updateUser] Error: ${error}`);
    }
  },
  deleteUser: async (req, res) => {
    try {
      console.log(`[deleteUser] Updating new user`);
      const { name } = req.params;

      const user = await User.findOne({name});
      if (!user) {
        res.send(`Error: No user ${name}`);
      } else {
        await User.deleteOne({_id: user._id});
      }
      res.send(`User ${name} successfully deleted.`);
    } catch (error) {
      console.log(`[deleteUser] Error: ${error}`);
    }
  }
};