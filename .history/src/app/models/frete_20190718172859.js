import Sequelize, { Model } from "sequelize";

class Frete extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        status: Sequelize.STRING,
        localidade: Sequelize.INTEGER,
        fk_categoria: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );
  }
}

export default Frete;
