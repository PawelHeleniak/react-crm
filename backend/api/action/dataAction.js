const Data = require('../models/data');

class DataAction {
  // get user data
  async getData(req, res) {
    const userData = await Data.find({});
    res.status(200).json(userData);
  }

  //test
  async saveData(req, res) {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const profession = req.body.profession;
    const email = req.body.email;
    const phone = req.body.phone;
    const userId = req.body.userId;

    const register = new Data({
      name: name,
      lastName: lastName,
      age: age,
      profession: profession,
      email: email,
      phone: phone,
      userId: userId,
    })

    await register.save();
    res.status(201).json(register);
  }
}

module.exports = new DataAction();