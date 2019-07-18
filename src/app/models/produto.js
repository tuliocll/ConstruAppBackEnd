import Sequelize, { Model } from "sequelize";

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        valor: Sequelize.FLOAT,
        imagem: Sequelize.STRING,
        fk_categoria: Sequelize.INTEGER,
        estoque: Sequelize.INTEGER,
        tipo: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Produto;
