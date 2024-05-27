const bodyParser = require('body-parser');
const express = require('express');
const { registerdetails, trackStatus } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3005;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let Vehicals ={};
// TODO ENDPOINTS
app.post('/Register', (req, res) => {
    const  {holdername,vehicalnumber,chassisnumber,insurancenumber,licensenumber}= req.body;

    if(Vehicals[vehicalnumber]){
        res.status(409).send('Vehical already registered');
    }else{
        Vehicals[vehicalnumber]={holdername,chassisnumber,insurancenumber,licensenumber};
        res.status(200).send('Vehical registered successfully')
    }
    
});

app.get("/", (req, res) => {
    res.end("Hello world")
})

app.post('/status', (req, res) => {
    const  {vehicalnumber,engine,brake,healthstatus}= req.body;
    if (Vehicals[vehicalnumber]){
        Vehicals[vehicalnumber].engine=engine;
        Vehicals[vehicalnumber].brake=brake;
        Vehicals[vehicalnumber].healthstatus=healthstatus;
        res.status(200).send('Status updated sucessfully');
    }else{
        res.status(404).send('Vehical not found')
    }
        
});

app.get('/status', (req, res) => {
    const {vehicalnumber}=req.query;
    if(Vehicals[vehicalnumber]){
        const{holdername,chassisnumber,insurancenumber,licensenumber,engine,brake,healthstatus}=Vehicals[vehicalnumber];
        res.status(200).json({
            holdername,
            vehicalnumber,
            chassisnumber,
            insurancenumber,
            licensenumber,
            engine,
            brake,
            healthstatus
        });
    }else{
        res.status(404).send ('Vehical not found');
    }
});

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))