import Sequelize, { Model } from "sequelize";

class PedidoCorpo extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_cabecalho: Sequelize.INTEGER,
        fk_produto: Sequelize.INTEGER,
        quantidade: Sequelize.INTEGER,
        valor: Sequelize.INTEGER,
        valor_total: Sequelize.INTEGER,
        status: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default PedidoCorpo;
