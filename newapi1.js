const bodyParser = require('body-parser');
const express = require('express');
const { registerdetails, trackStatus } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3006;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let Vehicals ={};
// TODO ENDPOINTS
app.post('/Register', async(req, res) => {
    const  {holdername,vehicalnumber,chassisnumber,insurancenumber,licensenumber}= req.body;

    try{
        await registerdetails.create( {holdername,vehicalnumber,chassisnumber,insurancenumber,licensenumber});
        res.status(200).send('Vehical registered successfully');
    }catch(err){
        console.error(err)
        res.status(404).send('Vehical already registered')
    }
    
});

app.get("/", (req, res) => {
    res.end("Hello world")
})

app.post('/status',async (req, res) => {
    const  {vehicalnumber,engine,brake,healthstatus}= req.body;
    try{
        await trackStatus.findOneAndUpdate({vehicalnumber},{engine,brake,healthstatus},{upsert:true});
        res.status(200).send('Status updated sucessfully');
    }catch(err){
        console.error(err);
        res.status(404).send('Vehical not found')
    }
        
});

app.get('/status',async (req, res) => {
    const {vehicalnumber}=req.query;
    try{
        const Vehical=await trackStatus.findOne({vehicalnumber});
        if(Vehical){
            res.status(200).json(Vehical);
        }else{
            res.status(404).send('Vehical not found')
        }
    }catch(err){
        console.error(err);
        res.status(500).send ('Failed to find vehical');
    }
});

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))