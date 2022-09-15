module.exports = (sequelize, DataTypes) => {
    const country = sequelize.define(
        "Country", //alias
        { //estructura de la tabla
            name: DataTypes.STRING(100),
            imageURL: DataTypes.STRING(200)
        },
        { //configs
            tableName: "country",
            timestamps: false
        }
    )

    country.associate = (models) => {
        country.hasMany(models.Product,
            {
                as: "products",
                foreignKey: "id_country"
            })
    }

    return country;
}