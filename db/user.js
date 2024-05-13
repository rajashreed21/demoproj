const { default: mongoose } = require("mongoose");
require("dotenv").config()
const claimSchema = require("./claimSchema");
const statusSchema = require("./statusSchema");
const vehicalSchema = require("./vehicalSchema");

const DB_NAME = process.env.DB_NAME || "Vehicalinsurance";
const URI = process.env.MONGO_URI || "mongodb+srv://temp1:temp1@cluster0.btm4xmc.mongodb.net";

const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const fileClaim = mongoose.model('claim', claimSchema, 'fileClaim');
const trackStatus = mongoose.model('status', statusSchema, 'trackStatus');
const vehicaldetails = mongoose.model('vehical', vehicalSchema, 'vehicaldetails');

module.exports = {fileClaim, trackStatus, vehicaldetails};