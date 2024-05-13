const bodyParser = require('body-parser');
const express = require('express');
const { todos, users } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.end("Hello world")
})

app.get("/hello", (req, res) => {
    res.end("Hello world welcom all")
})

// TODO ENDPOINTS
app.post('/createtodo', async (req, res) => {
    const todoBody = req.body;

    const todo = await todos.create({
        title: todoBody.title,
        desc: todoBody.desc,
        time: todoBody.time,
        
        
    });

    todo ? res.status(201).json({msg: "Success", data: todo}) : res.status(500).json({msg: "Error", data: todo})
})

app.get('/tododata', async (req, res) => {
    try {
        // Fetch all users from the database
        const todoData = await todos.find({});

        res.json(todoData);
    } catch (error) {
        console.error("Error while fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete('/delete/:id', async (req, res) => {
    const todoId = req.params.id;
    const deletedTodo = await todos.deleteOne({_id: todoId})

    deletedTodo ? res.status(200).json({msg: "Success", data: deletedTodo}) 
                : res.status(500).json({msg: "Error", data: deletedTodo}) 
})

app.put('/update/:id', async (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;

    //                                         id            newtodo
    const todo = await todos.findOneAndUpdate({_id: todoId}, updatedTodo);

    todo ?  res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

app.put('/enable/:id', async (req, res) => {
    const todoId = req.params.id;
    const todo = await todos.findOneAndUpdate({_id: todoId}, {active: true});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

app.put('/disable/:id', async (req, res) => {
    const todoId = req.params.id;
    const todo = await todos.findOneAndUpdate({_id: todoId}, {active: false});

    todo ? res.status(200).json({msg: "Success", data: todo}) 
                : res.status(500).json({msg: "Error", data: todo}) 
})

// USERS ENDPOINTS
app.post('/user/create', async (req, res) => {
    const user = req.body;
    const newUser = await users.create(user);

    newUser ? res.status(201).json({msg: "Success", data: newUser}) 
            : res.status(500).json({msg: "Error", data: newUser})
})

app.post("/login", (req, res) => {
    const body = req.body;
    const email = body.email;
    const pass = body.pass;

    if(email === "raji@gmail.com" && pass === "guna07")
        res.json({
            data: "success",
        })
    else 
        res.end("Incorrect creds")
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))