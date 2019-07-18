import * as Yup from "yup";
import Enderecos from "../models/Enderecos";

class EnderecoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      fk_usuario: Yup.number().required(),
      endereco: Yup.string().required(),
      cep: Yup.string().required(),
      cidade: Yup.string().required(),
      uf: Yup.string().required(),
      numero: Yup.string().required(),
      obs: Yup.string().required(),
      contato: Yup.string().required(),
      nome: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const exists = await Enderecos.findOne({
      where: { nome: req.body.nome }
    });

    if (exists) {
      return res.status(400).json({ error: "Endereço já cadastrado!" });
    }

    const endereco = await Enderecos.create(req.body);

    return res.json(endereco);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      idEndereco: Yup.string().required(),
      endereco: Yup.string(),
      cep: Yup.string(),
      cidade: Yup.string(),
      uf: Yup.string(),
      numero: Yup.string(),
      obs: Yup.string(),
      contato: Yup.string(),
      nome: Yup.string()
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

export default new EnderecoController();
