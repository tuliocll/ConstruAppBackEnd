import User from "../models/User";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import * as Yup from "yup";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      senha_usuario: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const { email, senha_usuario } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuario não encontrado!" });
    }

    if (!(await user.checkPassword(senha_usuario))) {
      return res.status(401).json({ error: "Password incorreto!" });
    }

    const { id, nome, sobrenome, permissao } = user;

    return res.json({
      user: {
        id,
        nome,
        sobrenome,
        permissao
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
