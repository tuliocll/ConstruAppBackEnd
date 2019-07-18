import Sequelize, { Model } from "sequelize";

class CupomDesconto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        observacao: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default CupomDesconto;
