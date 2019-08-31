"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        sobrenome: _sequelize2.default.STRING,
        senha_usuario: _sequelize2.default.VIRTUAL,
        senha: _sequelize2.default.STRING,
        cpf: _sequelize2.default.STRING,
        telefone: _sequelize2.default.STRING,
        sexo: _sequelize2.default.STRING,
        permissao: _sequelize2.default.STRING,
        nascimento: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.senha_usuario) {
        user.senha = await _bcryptjs2.default.hash(user.senha_usuario, 8);
      }
    });

    return this;
  }

  checkPassword(senha) {
    return _bcryptjs2.default.compare(senha, this.senha);
  }
}

exports. default = User;
