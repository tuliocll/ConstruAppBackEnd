"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pedido_corpo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_cabecalho: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_produto: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantidade: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      valor: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      valor_total: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("pedido_corpo");
  }
};
