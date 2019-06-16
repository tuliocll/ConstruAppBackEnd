module.exports = (sequelize, DataType) => {
  const Categoria = sequelize.define("Categoria", {
    nome: DataType.STRING
  });

  return Categoria;
};
