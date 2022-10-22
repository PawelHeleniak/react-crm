const User = require('../models/user');

class UserAction {
  async getUser(req, res) {
    const login = await User.find({});
    res.status(200).json(login);
  }
  async saveUser(req, res) {
    const name = req.body.name;
    const password = req.body.password;

    const register = new User({
      name: name,
      password: password,
    })

    await register.save();
    res.status(201).json(register);
  }
}

module.exports = new UserAction();