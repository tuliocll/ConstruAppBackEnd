module.exports = (sequelize, DataTypes) => {
  const ProdutosRelacionados = sequelize.define("ProdutosRelacionados", {
    fk_produto_principal: DataTypes.INTEGER,
    fk_produto_relacionado: DataTypes.INTEGER
  });

  return ProdutosRelacionados;
};
