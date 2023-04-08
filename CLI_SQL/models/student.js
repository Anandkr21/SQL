module.exports = (sequelize, DataTypes) => {
    const student = sequelize.define("student", {
        name: {type: DataTypes.STRING, allowNull: false},
        age:DataTypes.INTEGER,
        email:DataTypes.STRING,
        courseID: {
            type : DataTypes.INTEGER,
            references: {
                model: 'course',
                key: 'id',
            },
        },
    });
    return student;
}