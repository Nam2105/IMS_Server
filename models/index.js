const mongoose = require("mongoose");
const dotenv =  require('dotenv')
dotenv.config()
mongoose.set("debug", true);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE) .then(() => console.log("connected to db")).catch(error=>{console.log(error)})



module.exports.Student = require("./student");

module.exports.Internship = require("./internship");

module.exports.Notices = require("./notices");

module.exports.Faculty = require("./faculty");