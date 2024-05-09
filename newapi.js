const bodyParser = require('body-parser');
const express = require('express');
const { fileClaim, trackStatus, vehicaldetails } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3005;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// TODO ENDPOINTS
app.post('/Claim', async (req, res) => {
    const  body= req.body;

    const claim = await fileClaim.create({
        holdername: body.holdername,
        date: body.date,
        mobilenumber: body.mobilenumber,
        policereport: body.policereport,
        place: body.place,
        damagedetails: body.damagedetails,
    });

    claim ? res.status(201).json({msg: "Success", data: claim}) : res.status(500).json({msg: "Error", data: claim})
})

app.get("/", (req, res) => {
    res.end("Hello world")
})

app.post('/status', async (req, res) => {
    const  body= req.body;

    const status = await trackStatus.create({
        claimnumber: body.claimnumber,
        date: body.date,
        Status: body.Status,
    });

    status ? res.status(201).json({msg: "Success", data: status}) : res.status(500).json({msg: "Error", data: status})
})

app.post('/vehical', async (req, res) => {
    const  body= req.body;

    const vehical = await vehicaldetails.create({
        model: body.model,
        year: body.year,
        photo: body.photo,
    });

    vehical ? res.status(201).json({msg: "Success", data: vehical}) : res.status(500).json({msg: "Error", data: vehical})
})


app.post("/login", (req, res) => {
    const body = req.body;
    const username = body.username;
    const pass = body.pass;

    if(email === "raji@gmail.com" && pass === guna07)
        res.json({
            data: "success",
        })
    else 
        res.end("Incorrect creds")
})

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))