const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pju8cdb.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error)
        return console.log("Ocorreu um error ao conectar na DB", error);

      return console.log("Db connected.");
    }
  );
};

module.exports = connectToDatabase;
