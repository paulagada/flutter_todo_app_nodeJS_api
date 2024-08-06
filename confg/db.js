const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://127.0.0.1:27017/flutterTodo")
  .on("open", () => {
    console.log("mongoDb Connected");
  })
  .on("error", () => {
    console.log("mongoDb connection error");
  });

module.exports = connection;
