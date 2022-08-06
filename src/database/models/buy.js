module.exports = (sequelize, DataTypes) => {
    const buy = sequelize.define(
        "Buy", //alias
        {   //structure
            quantity: DataTypes.INTEGER,
            total: DataTypes.DECIMAL(7,2)
        },
        {   //configs
            tableName: "sell",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: false
        }
    )

    buy.associate = (models) => {
        buy.belongsTo(models.User,
            {
                as: "user",
                foreignKey: "id_buy"
            });
    }

    return buy;
}