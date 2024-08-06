const app = require("./app");
const db = require("./confg/db");
const userModel = require("./model/user.model");
const todoModel = require("./model/todo.model");

const port = 3000;

app.get("/", (req, res) => {
  console.log("you");
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server Listening on port http://localhost:${port}`);
});
