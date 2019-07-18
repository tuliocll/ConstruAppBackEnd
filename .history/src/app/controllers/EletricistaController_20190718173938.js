import * as Yup from "yup";
import Eletricista from "../models/eletricista";

class EletricistaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      status: Yup.string().required(),
      observacao: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const exists = await Eletricista.findOne({
      where: { nome: req.body.nome }
    });

    if (freteExists) {
      return res.status(400).json({ error: "Frete já cadastrado!" });
    }

    const frete = await Eletricista.create(req.body);

    return res.json(frete);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      status: Yup.string().required(),
      observacao: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const { nome } = req.body;

    const frete = await Eletricista.findByPk(req.body.freteId);

    if (nome !== frete.nome) {
      const freteExists = await Eletricista.findOne({
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
