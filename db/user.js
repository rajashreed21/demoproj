const { default: mongoose } = require("mongoose");
require("dotenv").config()
const registerSchema = require("./registerSchema");
const statusSchema = require("./statusSchema");

const DB_NAME = process.env.DB_NAME || "Vehicalhealthmonitoring";
const URI = process.env.MONGO_URI || "mongodb+srv://temp1:temp1@cluster0.btm4xmc.mongodb.net";

const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const registerdetails = mongoose.model('register', registerSchema, 'registerdetails');
const trackStatus = mongoose.model('status', statusSchema, 'trackStatus');

module.exports = {registerdetails, trackStatus};