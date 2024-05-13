const { default: mongoose } = require("mongoose");
require("dotenv").config()
const todoSchema = require("./todoSchema");
const userSchema = require("./userSchema");

const DB_NAME = process.env.DB_NAME || "todoApp";
const URI = process.env.MONGO_URI || "mongodb+srv://temp1:temp1@cluster0.btm4xmc.mongodb.net";
const MONGO_URI = `${URI}/${DB_NAME}`;

mongoose.connect(MONGO_URI).then(() => console.log("Connected")).catch((err) => console.log(err))

const users = mongoose.model('user', userSchema, 'users');
const todos = mongoose.model('todo', todoSchema, 'todos');

module.exports = {users, todos};