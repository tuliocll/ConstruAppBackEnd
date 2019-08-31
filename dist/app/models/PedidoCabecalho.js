"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class PedidoCabecalho extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_usuario: _sequelize2.default.INTEGER,
        data: _sequelize2.default.DATE,
        status: _sequelize2.default.STRING,
        valor: _sequelize2.default.INTEGER,
        fk_indicacao: _sequelize2.default.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

exports. default = PedidoCabecalho;
