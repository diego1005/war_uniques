module.exports = (sequelize, DataTypes) => {
    const artist = sequelize.define(
        "Artist",
        {
            nombre: DataTypes.STRING(85)
        },
        {
            tableName: "artistas",
            timestamps: false
        }
    )
    return artist;
}