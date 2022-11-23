const User = require('../models/user');

class UserAction {
  async getUser(req, res) {
    const login = await User.find({});
    res.status(200).json(login);
  }

  // login to crm
  async loginUser(req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const user = await User.findOne({ login, password });

    res.status(200).json(user);
  }

  // save user test
  async saveUser(req, res) {
    //get last user
    const getUsers = await User.find({});
    let usersId = Object.entries(getUsers).map(([key, val] = entry) => {
      return val.userId;
    });
    const lastUserId = Math.max.apply(null, usersId)

    //create new user
    const login = req.body.login;
    const password = req.body.password;
    const userId = lastUserId + 1;

    const register = new User({
      login: login,
      password: password,
      userId: userId,
    })

    await register.save();
    res.status(201).json(register);
  }
}

module.exports = new UserAction();