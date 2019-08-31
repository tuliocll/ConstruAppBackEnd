"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class PedidoCorpo extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_cabecalho: _sequelize2.default.INTEGER,
        fk_produto: _sequelize2.default.INTEGER,
        quantidade: _sequelize2.default.INTEGER,
        valor: _sequelize2.default.INTEGER,
        valor_total: _sequelize2.default.INTEGER,
        status: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );
  }
}

exports. default = PedidoCorpo;
