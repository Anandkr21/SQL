const { DataTypes, DATEONLY } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define('course', {
        name: { type: DataTypes.STRING, allowNull: false },
        level: DataTypes.INTEGER,
    });
    return course;
}