"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class CupomDesconto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        fk_categoria: _sequelize2.default.STRING,
        desconto: _sequelize2.default.INTEGER,
        image: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );
  }
}

exports. default = CupomDesconto;
