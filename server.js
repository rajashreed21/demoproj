const bodyParser = require('body-parser');
const express = require('express');
const devicedetails = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3008;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Insert a new device
app.post('/room', async (req, res) => {
    try {
        const { room, devicename, status } = req.body;
        const newDevice = new devicedetails({ room,devicename, status });
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (err) {
        console.error('Error inserting device:', err);
        res.status(500).send('Internal Server Error');
    }
  });
  

// Toggle device status
app.post('/device', async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { device, status } = req.body;
        const existingDevice = await devicedetails.findOne({ devicename: device });
        if (!existingDevice) {
            console.log('Device not found: ${device}');
            return res.status(404).json({ error: 'Device not found: ${device} '});
        }
        existingDevice.status = status;
        await existingDevice.save();
        res.status(200).send(existingDevice);
    } catch (err) {
        console.error('Error handling request:', err);
        res.status(400).send(err.message);
    }
});
app.get("/hello", (req, res) => {
    res.end("Hello world welcom all")
})
// Retrieve device status
app.get('/room/device/:devicename', async (req, res) => {
    try {
        const deviceName = req.params.devicename;
        console.log('Device name requested: ${deviceName}');
        const device = await devicedetails.findOne({ devicename: deviceName });
        if (!device) {
            console.log('Device not found: ${deviceName}');
            return res.status(404).json({ error: 'Device not found: ${deviceName} '});
        }
        res.status(200).send({ status: device.status });
    } catch (err) {
        console.error('Error handling request:', err);
        res.status(400).send(err.message);
    }
});


app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))