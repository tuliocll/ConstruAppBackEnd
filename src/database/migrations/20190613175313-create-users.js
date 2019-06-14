"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      sobrenome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      sexo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      permissao: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nascimento: {
        allowNull: false,
        type: DataTypes.DATE
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
    return queryInterface.dropTable("Users");
  }
};
