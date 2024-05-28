const { default: mongoose } = require("mongoose");
require("dotenv").config()
const deviceSchema = require("./deviceSchema");

const DB_NAME = process.env.DB_NAME || "SmartHomeController";
const URI = process.env.MONGO_URI || "mongodb+srv://temp1:temp1@cluster0.btm4xmc.mongodb.net";

const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const devicedetails = mongoose.model('device', deviceSchema, 'devicedetails');

module.exports = devicedetails;