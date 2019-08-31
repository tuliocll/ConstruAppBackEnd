"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _produto = require('../models/produto'); var _produto2 = _interopRequireDefault(_produto);

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

    const produtoExists = await _produto2.default.findOne({
      where: { nome: req.body.nome }
    });

    if (produtoExists) {
      return res.status(400).json({ error: "Produto já cadastrado!" });
    }

    const produto = await _produto2.default.create(req.body);

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

    const produto = await _produto2.default.findByPk(req.body.produtoID);

    if (nome !== produto.nome) {
      const produtoExists = await _produto2.default.findOne({
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
      const produto = await _produto2.default.findByPk(req.body.produtoId);
      return res.json(produto);
    }

    const produto = await _produto2.default.findAll();
    return res.json(produto);
  }
}

exports. default = new ProdutoController();
