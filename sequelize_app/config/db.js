const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('restaurant', 'root', process.env.sqlpassword, {
    host: "localhost",
    dialect: 'mysql',
});

module.exports = { sequelize };