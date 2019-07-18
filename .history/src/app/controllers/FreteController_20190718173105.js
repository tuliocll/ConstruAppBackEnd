import * as Yup from "yup";
import Frete from "../models/frete";

class FreteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      valor: Yup.number().required(),
      status: Yup.string().required(),
      localidade: Yup.string().required(),
      fk_categoria: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const freteExists = await Frete.findOne({
      where: { nome: req.body.nome }
    });

    if (freteExists) {
      return res.status(400).json({ error: "Produto já cadastrado!" });
    }

    const frete = await Frete.create(req.body);

    return res.json(frete);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      valor: Yup.number().required(),
      status: Yup.string().required(),
      localidade: Yup.string().required(),
      fk_categoria: Yup.number().required()
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

export default new FreteController();
