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
    const login = req.body.login;
    const password = req.body.password;
    const userId = req.body.userId;

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