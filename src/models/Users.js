'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      User_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      Name: DataTypes.STRING,
      Surname: DataTypes.STRING,
      Email: DataTypes.STRING,
      Address: DataTypes.STRING,
      Picture: DataTypes.STRING,
      Birthday: DataTypes.STRING,
      Gender: DataTypes.STRING,
      Promo: DataTypes.INTEGER,
      Points: DataTypes.INTEGER,
      Friends: DataTypes.INTEGER,
      Rating: DataTypes.INTEGER,
    },
    {}
  );
  return User;
};
