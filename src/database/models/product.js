module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        "Product", //alias
        { //estructura de la tabla
            name: DataTypes.STRING(200),
            description: DataTypes.TEXT,
            price: DataTypes.DECIMAL(5,2),
            shipping: DataTypes.TINYINT,
            offer: DataTypes.TINYINT,
            credit: DataTypes.STRING(3),
            imageURL: DataTypes.STRING(200)
        },
        { //configs
            tableName: "product",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: false
        }
    )

    product.associate = (models) => {
        product.belongsTo(models.Country,
            {
                as: "country",
                foreignKey: "id_country"
            })
    }

    return product;
}