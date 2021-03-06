"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Frete extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        valor: _sequelize2.default.INTEGER,
        nome: _sequelize2.default.STRING,
        status: _sequelize2.default.STRING,
        localidade: _sequelize2.default.STRING,
        fk_categoria: _sequelize2.default.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

exports. default = Frete;
