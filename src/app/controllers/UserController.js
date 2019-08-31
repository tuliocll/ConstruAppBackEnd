import * as Yup from "yup";
import User from "../models/User";

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

    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ status: "Usuario já cadastrado!" });
    }

    const user = await User.create(req.body);

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

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

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

export default new UserController();
