"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("PedidoCorpo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fk_cabecalho: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      fk_produto: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      quantidade: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      valor_total: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      status: {
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
    return queryInterface.dropTable("PedidoCorpo");
  }
};
