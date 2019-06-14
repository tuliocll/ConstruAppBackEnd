"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CupomDesconto", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fk_categoria: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      desconto: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      valor_minimo: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      imagem: {
        allowNull: false,
        type: DataTypes.STRING
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
    return queryInterface.dropTable("CupomDesconto");
  }
};
