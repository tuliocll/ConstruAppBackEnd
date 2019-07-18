import Sequelize, { Model } from "sequelize";

class Enderecos extends Model {
  static init(sequelize) {
    super.init(
      {
        fk_usuario: Sequelize.INTEGER,
        endereco: Sequelize.STRING,
        cep: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING,
        numero: Sequelize.STRING,
        obs: Sequelize.STRING,
        contato: Sequelize.STRING,
        nome: Sequelize.STRING
      },
      {
        sequelize
      }
    );
  }
}

export default Enderecos;
