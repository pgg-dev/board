require("dotenv").config();

module.exports = {
  development: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "board",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "false",
  },
};
