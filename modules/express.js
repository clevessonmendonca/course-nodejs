const express = require("express");

const app = express();
const PORT = 8080;

app.get("/home", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.con",
    },
    {
      name: "Jane Doe",
      email: "jane@doe.con",
    },
  ];

  res.status(200).send(users);
});

app.listen(PORT, () => console.log(`Rodando na port ${PORT}`));
