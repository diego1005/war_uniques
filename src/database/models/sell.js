module.exports = (sequelize, DataTypes) => {
    const sell = sequelize.define(
        "Sell", //alias
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

    sell.associate = (models) => {
        sell.belongsTo(models.User,
            {
                as: "user",
                foreignKey: "id_sell"
            });
    }

    return sell;
}