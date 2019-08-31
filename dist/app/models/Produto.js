"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Produto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        descricao: _sequelize2.default.STRING,
        valor: _sequelize2.default.INTEGER,
        imagem: _sequelize2.default.STRING,
        fk_categoria: _sequelize2.default.INTEGER,
        estoque: _sequelize2.default.INTEGER,
        tipo: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );
  }
}

exports. default = Produto;
