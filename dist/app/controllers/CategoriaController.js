"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _Categoria = require('../models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);

class CategoriaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const categoriaExists = await _Categoria2.default.findOne({
      where: { nome: req.body.nome }
    });

    if (categoriaExists) {
      return res.status(400).json({ error: "Categoria já cadastrada!" });
    }

    const categoria = await _Categoria2.default.create(req.body);

    return res.json(categoria);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const { nome } = req.body;

    const categoria = await _Categoria2.default.findByPk(req.body.categoriaId);

    if (nome !== categoria.nome) {
      const categoriaExists = await _Categoria2.default.findOne({
        where: { nome: req.body.nome }
      });
      if (categoriaExists) {
        return res.status(400).json({ error: "Categoria já cadastrada!" });
      }
    }

    const categoriaAtualizada = await categoria.update(req.body);

    return res.json(categoriaAtualizada);
  }

  async find(req, res) {
    if (req.body.categoriaId) {
      const categoria = await _Categoria2.default.findByPk(req.body.categoriaId);
      return res.json(categoria);
    }

    const categoria = await _Categoria2.default.findAll();
    return res.json(categoria);
  }
}

exports. default = new CategoriaController();
