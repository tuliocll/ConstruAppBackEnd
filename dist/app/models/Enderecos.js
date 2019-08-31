"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Enderecos extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_usuario: _sequelize2.default.INTEGER,
        endereco: _sequelize2.default.STRING,
        cep: _sequelize2.default.STRING,
        cidade: _sequelize2.default.STRING,
        uf: _sequelize2.default.STRING,
        numero: _sequelize2.default.STRING,
        obs: _sequelize2.default.STRING,
        contato: _sequelize2.default.STRING,
        nome: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );
  }
}

exports. default = Enderecos;
