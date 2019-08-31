"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().required(),
      senha_usuario: Yup.string().required(),
      sobrenome: Yup.string().required(),
      cpf: Yup.string().required(),
      telefone: Yup.string().required(),
      sexo: Yup.string().required(),
      permissao: Yup.string().required(),
      nascimento: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ status: "Erro na validação" });
    }

    const userExists = await _User2.default.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ status: "Usuario já cadastrado!" });
    }

    const user = await _User2.default.create(req.body);

    return res.json({ status: "ok" });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string(),
      senhaAntiga: Yup.string(),
      senha_usuario: Yup.string()
        .min(6)
        .when("senhaAntiga", (senhaAntiga, field) =>
          senhaAntiga ? field.required() : field
        ),
      confirmaSenha: Yup.string().when("senha_usuario", (senha, field) =>
        senha ? field.required().oneOf([Yup.ref("senha_usuario")]) : field
      ),
      sobrenome: Yup.string(),
      cpf: Yup.string(),
      telefone: Yup.string(),
      sexo: Yup.string(),
      permissao: Yup.string(),
      nascimento: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ status: "Erro na validação" });
    }

    const { email, senha_usuario, senhaAntiga } = req.body;

    const user = await _User2.default.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await _User2.default.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ status: "Usuario já cadastrado!" });
      }
    }

    if (senhaAntiga && !(await user.checkPassword(senhaAntiga))) {
      return res.status(401).json({ status: "Senha não confere!" });
    }

    const userAtualizado = await user.update(req.body);

    return res.json(userAtualizado);
  }
}

exports. default = new UserController();
