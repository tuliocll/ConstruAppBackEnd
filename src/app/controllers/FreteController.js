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
      return res.status(400).json({ error: "Frete já cadastrado!" });
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

    const frete = await Frete.findByPk(req.body.freteId);

    if (nome !== frete.nome) {
      const freteExists = await Frete.findOne({
        where: { nome: req.body.nome }
      });

      if (freteExists) {
        return res.status(400).json({ error: "Frete já cadastrado!" });
      }
    }

    const freteAtualizar = await frete.update(req.body);

    return res.json(freteAtualizar);
  }

  async find(req, res) {
    if (req.body.freteId) {
      const frete = await Frete.findByPk(req.body.freteId);
      return res.json(frete);
    }

    const frete = await Frete.findAll();
    return res.json(frete);
  }
}

export default new FreteController();
