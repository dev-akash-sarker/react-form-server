const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/userlist", function (req, res) {
  let { firstname, lastname, email, age } = req.body;

  if (!firstname) {
    return res.send("first name is required!");
  }
  if (!lastname) {
    return res.send("last name is required!");
  }
  if (!email) {
    return res.send("email is required!");
  }
  if (!age) {
    return res.send("age is required!");
  }
  res.send(req.body);
  //   console.log(req.body);
});

app.listen(8000, function (req, res) {
  console.log("server is running");
});
