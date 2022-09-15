module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "User", //alias
        { //estructura de la tabla
            name: DataTypes.STRING(150),
            lastname: DataTypes.STRING(150),
            email: DataTypes.STRING(200),
            password: DataTypes.STRING(200),
            imageURL: DataTypes.STRING(200),
        },
        { //configs
            tableName: "users",
            timestamps: false
        }
    )

    user.associate = (models) => {
        user.hasMany(models.Sell,
            {
                as: "sales",
                foreignKey: "id_sell"
            });

        user.hasMany(models.Buy,
            {
                as: "buys",
                foreignKey: "id_buy"
            })
    }

    return user;
}