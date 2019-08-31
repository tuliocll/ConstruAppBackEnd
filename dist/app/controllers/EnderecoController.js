"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Enderecos = require('../models/Enderecos'); var _Enderecos2 = _interopRequireDefault(_Enderecos);

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

    const exists = await _Enderecos2.default.findOne({
      where: { nome: req.body.nome }
    });

    if (exists) {
      return res.status(400).json({ error: "Endereço já cadastrado!" });
    }

    const endereco = await _Enderecos2.default.create(req.body);

    return res.json(endereco);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      enderecoId: Yup.string().required(),
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

    const endereco = await _Enderecos2.default.findByPk(req.body.enderecoId);

    if (nome !== endereco.nome) {
      const exists = await _Enderecos2.default.findOne({
        where: { nome: req.body.nome }
      });

      if (exists) {
        return res.status(400).json({ error: "Endereço já existente!" });
      }
    }

    const enderecoAtualizar = await endereco.update(req.body);

    return res.json(enderecoAtualizar);
  }

  async find(req, res) {
    if (req.body.enderecoId) {
      const endereco = await _Enderecos2.default.findByPk(req.body.enderecoId);
      return res.json(endereco);
    }

    const endereco = await _Enderecos2.default.findAll();
    return res.json(endereco);
  }
}

exports. default = new EnderecoController();
