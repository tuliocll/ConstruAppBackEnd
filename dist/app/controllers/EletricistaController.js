"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Eletricista = require('../models/Eletricista'); var _Eletricista2 = _interopRequireDefault(_Eletricista);

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

    const exists = await _Eletricista2.default.findOne({
      where: { nome: req.body.nome }
    });

    if (exists) {
      return res.status(400).json({ error: "Frete já cadastrado!" });
    }

    const eletricista = await _Eletricista2.default.create(req.body);

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

    const eletricista = await _Eletricista2.default.findByPk(req.body.eletricistaId);

    if (nome !== eletricista.nome) {
      const exists = await _Eletricista2.default.findOne({
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
      const eletricista = await _Eletricista2.default.findByPk(req.body.eletricistaId);
      return res.json(eletricista);
    }

    const eletricista = await _Eletricista2.default.findAll();
    return res.json(eletricista);
  }
}

exports. default = new EletricistaController();
