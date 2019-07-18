import * as Yup from "yup";
import Eletricista from "../models/Eletricista";

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

    if (exists) {
      return res.status(400).json({ error: "Frete já cadastrado!" });
    }

    const eletricista = await Eletricista.create(req.body);

    return res.json(eletricista);
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

    const eletricista = await Eletricista.findByPk(req.body.eletricistaId);

    if (nome !== eletricista.nome) {
      const exists = await Eletricista.findOne({
        where: { nome: req.body.nome }
      });

      if (exists) {
        return res.status(400).json({ error: "Frete já cadastrado!" });
      }
    }

    const eletricistaAtualizar = await eletricista.update(req.body);

    return res.json(eletricistaAtualizar);
  }

  async find(req, res) {
    if (req.body.eletricistaId) {
      const eletricista = await Eletricista.findByPk(req.body.eletricistaId);
      return res.json(eletricista);
    }

    const eletricista = await Eletricista.findAll();
    return res.json(eletricista);
  }
}

export default new EletricistaController();
