const jwt = require('jsonwebtoken');
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
  signUp: async (req, res) => {
    try {
      console.log(`[signUp] Creating new user`);

      const { username, password, email } = req.body;

      const userExists = await User.findOne({username});
      if (userExists) {
        res.send('Error: User already exists');
      } else {
        await userService.signUp(username, password, email);
      }
      res.send('Successful registration');

    } catch (error) {
      console.log(`[newUser] Error: ${error}`);
    }
  },
  updateUser: async (req, res) => {
    try {
      console.log(`[updateUser] Updating new user`);
      const { username } = req.params;

      const user = await User.findOne({username});
      if (!user) {
        res.send(`Error: No user ${username}`);
      } else {
        await userService.updateUser(user._id, req.body);
      }
      res.send(`User ${username} successfully updated.`);
    } catch (error) {
      console.log(`[updateUser] Error: ${error}`);
    }
  },
  deleteUser: async (req, res) => {
    try {
      console.log(`[deleteUser] Updating new user`);
      const { username } = req.params;

      const user = await User.findOne({username});
      if (!user) {
        res.send(`Error: No user ${username}`);
      } else {
        await User.deleteOne({_id: user._id});
      }
      res.send(`User ${username} successfully deleted.`);
    } catch (error) {
      console.log(`[deleteUser] Error: ${error}`);
    }
  },
  signIn: async (req, res) => {
    try {
      console.log(`[signIn] User is signing in`);
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
        res.send(`Error: Login Failed`);
        
      } else {
        if ( user.password === password ) {
          const {_id: id, username} = user;
          var token = jwt.sign(
            { id, username }, 
            process.env.JWT_SECRET, 
            { expiresIn: +process.env.JWT_EXPIRATION }
          );
          console.log(token)
          res.send('Successful Login!');
        } else {
          res.send('Incorrect credentials');
        }
      }
    } catch (error) {
      console.log(`[signIn] Error: ${error}`);
    }
  },
  signOut: async (req, res) => {
    try {
      console.log(`[signOut] User is signing out`);
      const { username } = req.body;
      const user = await User.findOne({username});

      if (!user) {
        res.send(`Error: No user found`);
      } else {
        res.send(`User signed out`);
      }
    } catch (error) {
      console.log(`[signOut] Error: ${error}`);
    } 
  }
};