var express = require("express");
require("dotenv").config();

var indexRouter = require("./routes");
var sequelize = require("./models").sequelize;

var app = express();
sequelize.sync();

app.set("port", process.env.PORT || 3002);

app.use("/", indexRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
