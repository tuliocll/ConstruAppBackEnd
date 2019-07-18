import * as Yup from "yup";
import Produto from "../models/produto";

class ProdutoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      valor: Yup.number().required(),
      imagem: Yup.string().required(),
      fk_categoria: Yup.number().required(),
      estoque: Yup.number().required(),
      tipo: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const produtoExists = await Produto.findOne({
      where: { nome: req.body.nome }
    });

    if (produtoExists) {
      return res.status(400).json({ error: "Produto já cadastrado!" });
    }

    const produto = await Produto.create(req.body);

    return res.json(produto);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      valor: Yup.number().required(),
      imagem: Yup.string().required(),
      fk_categoria: Yup.number().required(),
      estoque: Yup.number().required(),
      tipo: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const { nome } = req.body;

    const produto = await Produto.findByPk(req.body.produtoID);

    if (nome !== produto.nome) {
      const produtoExists = await Produto.findOne({
        where: { nome: req.body.nome }
      });

      if (produtoExists) {
        return res.status(400).json({ error: "Produto já cadastrado!" });
      }
    }

    const produtoAtualizar = await produto.update(req.body);

    return res.json(produtoAtualizar);
  }

  async find(req, res) {
    if (req.body.produtoId) {
      const produto = await Produto.findByPk(req.body.produtoId);
      return res.json(produto);
    }

    const produto = await Produto.findAll();
    return res.json(produto);
  }
}

export default new CategoriaController();
