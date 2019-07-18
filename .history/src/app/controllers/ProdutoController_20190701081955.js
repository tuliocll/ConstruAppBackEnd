import { Produto } from "../models";

module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll();

    return res.json(produtos);
  },

  async store(req, res) {
    const { nome, valor, descricao, imagem } = req.body;

    const produto = await Produto.create({
      nome,
      valor,
      descricao,
      imagem
    });

    return res.json(produto);
  }
};
