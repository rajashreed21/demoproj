const bodyParser = require('body-parser');
const express = require('express');
const { registerdetails, trackStatus } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3005;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// TODO ENDPOINTS
app.post('/Register', async (req, res) => {
    const  body= req.body;

    const register = await registerdetails.create({
        holdername: body.holdername,
        vehicalnumber: body.vehicalnumber,
        chassisnumber: body.chassisnumber,
        insurancenumber: body.insurancenumber,
        licensenumber: body.licensenumber,
    });

    register ? res.status(201).json({msg: "Success", data: register}) : res.status(500).json({msg: "Error", data: register})
})

app.get("/", (req, res) => {
    res.end("Hello world")
})

app.post('/status', async (req, res) => {
    const  body= req.body;

    const status = await trackStatus.create({
        vehicalstatus: body.vehicalstatus,
        engine: body.engine,
        brake: body.brake,
    });

    status ? res.status(201).json({msg: "Success", data: status}) : res.status(500).json({msg: "Error", data: status})
})

app.get('/statusdata', async (req, res) => {
    try {
        // Fetch all users from the database
        const statusdata = await trackStatus.find({});

        res.json(statusdata);
    } catch (error) {
        console.error("Error while fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/login", (req, res) => {
    const body = req.body;
    const email = body.email;
    const pass = body.pass;

    if(email === "raji@gmail.com" && pass === guna07)
        res.json({
            data: "success",
        })
    else 
        res.end("Incorrect creds")
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))

