import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        senha_usuario: Sequelize.VIRTUAL,
        senha: Sequelize.STRING,
        cpf: Sequelize.STRING,
        telefone: Sequelize.STRING,
        sexo: Sequelize.STRING,
        permissao: Sequelize.STRING,
        nascimento: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.senha_usuario) {
        user.senha = await bcrypt.hash(user.senha_usuario, 8);
      }
    });

    return this;
  }

  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha);
  }
}

export default User;
