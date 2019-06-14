"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("frete", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
      localidade: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fk_categoria: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("frete");
  }
};
