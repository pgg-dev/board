module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "comment",
    {
      comment: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
