const bodyParser = require('body-parser');
const express = require('express');
const { registerdetails, trackStatus } = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3008;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


// TODO ENDPOINTS
app.post('/Register', async(req, res) => {
    const  {holdername,vehiclenumber,chassisnumber,insurancenumber,licensenumber}= req.body;

    try{
        await registerdetails.create( {holdername,vehiclenumber,chassisnumber,insurancenumber,licensenumber});
        res.status(200).send('Vehicle registered successfully');
    }catch(err){
        console.error(err)
        res.status(404).send('Vehicle already registered')
    }
    
});

app.post('/status',async (req, res) => {
    const  {vehiclenumber,engine,brake,healthstatus}= req.body;
    try{
        await trackStatus.findOneAndUpdate({vehiclenumber},{engine,brake,healthstatus},{upsert:true});
        res.status(200).send('Status updated sucessfully');
    }catch(err){
        console.error(err);
        res.status(404).send('Vehical not found')
    }
        
});

app.get('/status',async (req, res) => {
    const {vehiclenumber}=req.query;
    try{
        const Vehicle=await trackStatus.findOne({vehiclenumber});
        if(Vehicle){
            res.status(200).json(Vehicle);
        }else{
            res.status(404).send('Vehicle not found')
        }
    }catch(err){
        console.error(err);
        res.status(500).send ('Failed to find vehicle');
    }
});

app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))