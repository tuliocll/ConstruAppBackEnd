"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _frete = require('../models/frete'); var _frete2 = _interopRequireDefault(_frete);

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

    const freteExists = await _frete2.default.findOne({
      where: { nome: req.body.nome }
    });

    if (freteExists) {
      return res.status(400).json({ error: "Frete já cadastrado!" });
    }

    const frete = await _frete2.default.create(req.body);

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

    const frete = await _frete2.default.findByPk(req.body.freteId);

    if (nome !== frete.nome) {
      const freteExists = await _frete2.default.findOne({
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
      const frete = await _frete2.default.findByPk(req.body.freteId);
      return res.json(frete);
    }

    const frete = await _frete2.default.findAll();
    return res.json(frete);
  }
}

exports. default = new FreteController();
