"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("enderecos", {
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
      endereco: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING
      },
      uf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      numero: {
        allowNull: false,
        type: DataTypes.STRING
      },
      obs: {
        allowNull: false,
        type: DataTypes.STRING
      },
      contato: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nome: {
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
    return queryInterface.dropTable("enderecos");
  }
};
