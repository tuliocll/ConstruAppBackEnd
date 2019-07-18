"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("cupom_desconto", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_categoria: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      desconto: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      valor_minimo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imagem: {
        allowNull: false,
        type: Sequelize.STRING
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cupom_desconto");
  }
};
