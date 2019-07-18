import Sequelize, { Model } from "sequelize";

class Eletricista extends Model {
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

export default Eletricista;
