"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Produto", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING
      },
      valor: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      imagem: {
        allowNull: false,
        type: DataTypes.STRING
      },
      fk_categoria: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      estoque: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      tipo: {
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

  down: queryInterface => {
    return queryInterface.dropTable("Produto");
  }
};
