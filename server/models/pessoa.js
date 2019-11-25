'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    sex: DataTypes.CHAR,
    active: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  Pessoa.associate = function(models) {
    // associations can be defined here
  };
  return Pessoa;
};