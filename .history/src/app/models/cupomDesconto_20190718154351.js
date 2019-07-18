import Sequelize, { Model } from "sequelize";

class CupomDesconto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        fk_categoria: Sequelize.STRING,
        desconto: Sequelize.FLOAT,
        image: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default CupomDesconto;
