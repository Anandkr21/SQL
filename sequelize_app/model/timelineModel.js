const { sequelize } = require('../config/db');
const DataTypes = require('sequelize');

const Timeline = sequelize.define('timeline', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    PrevStatus: {
        type: DataTypes.STRING,
        defaultValue: "Confirmed"
    },
});

module.exports = { Timeline }