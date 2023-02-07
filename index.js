const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

require("./modules/express");
// const { Person } = require("./person");

//const person = new Person('Cl')
// console.log(person.sayMyName())

// require('./modules/path')
//require('./modules/fs')
//require('./modules/http')

// E1aErI7irlymtp7w
