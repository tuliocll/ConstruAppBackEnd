import Sequelize, { Model } from "sequelize";

class PedidoCabecalho extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_usuario: Sequelize.INTEGER,
        data: Sequelize.DATE,
        status: Sequelize.STRING,
        valor: Sequelize.INTEGER,
        fk_indicacao: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

export default PedidoCabecalho;
