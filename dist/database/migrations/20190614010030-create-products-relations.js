"use strict";"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produtos_relacionados", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_produto_principal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fk_produto_relacionado: {
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produtos_relacionados");
  }
};
