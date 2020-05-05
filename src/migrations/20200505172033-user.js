'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      User_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Surname: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
      },
      Picture: {
        type: Sequelize.STRING,
      },
      Birthday: {
        type: Sequelize.STRING,
      },
      Gender: {
        type: Sequelize.STRING,
      },
      Promo: {
        type: Sequelize.INTEGER,
      },
      Points: {
        type: Sequelize.INTEGER,
      },
      Friends: {
        type: Sequelize.INTEGER,
      },
      Rating: {
        type: Sequelize.INTEGER,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
