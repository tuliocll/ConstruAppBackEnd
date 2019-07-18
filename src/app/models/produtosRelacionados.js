import Sequelize, { Model } from "sequelize";

class ProdutosRelacionados extends Model {
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

export default ProdutosRelacionados;
