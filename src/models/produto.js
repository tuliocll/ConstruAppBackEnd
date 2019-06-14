module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define("Produto", {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    imagem: DataTypes.STRING,
    fk_categoria: DataTypes.INTEGER,
    estoque: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  });

  return Produto;
};
