"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Eletricista extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        observacao: _sequelize2.default.STRING,
        status: _sequelize2.default.STRING
      },
      {
        sequelize
      }
    );
  }
}

exports. default = Eletricista;
