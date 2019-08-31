"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class ProdutosRelacionados extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        fk_produto_principal: DataTypes.INTEGER,
        fk_produto_relacionado: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

exports. default = ProdutosRelacionados;
