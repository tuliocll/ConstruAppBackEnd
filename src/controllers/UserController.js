const { User } = require("../models");

module.exports = {
  async index(req, res) {
    const usuarios = await User.findAll();

    return res.json(usuarios);
  },

  async store(req, res) {
    const { name, email, password } = req.body;

    const post = await User.create({
      name,
      email,
      password
    });

    return res.json(post);
  }
};
