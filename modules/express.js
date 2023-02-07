const express = require("express");
const UserModel = require("../src/models/user.model");

const PORT = 8080;
const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).send("Hello");
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`Rodando na port ${PORT}`));
