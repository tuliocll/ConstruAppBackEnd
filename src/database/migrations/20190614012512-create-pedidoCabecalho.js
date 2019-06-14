"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("PedidoCabecalho", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      data: {
        allowNull: false,
        type: DataTypes.DATE
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      fk_indicacao: {
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

  down: queryInterface => {
    return queryInterface.dropTable("PedidoCabecalho");
  }
};
