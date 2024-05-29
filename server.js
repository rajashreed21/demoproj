const bodyParser = require('body-parser');
const express = require('express');
const devicedetails = require('./db/user');
const app = express()
const PORT = process.env.PORT || 3008;

//Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Insert a new device
app.post('/api/device', async (req, res) => {
    try {
        const { name, type, status } = req.body;
        const newDevice = new devicedetails({ name, type, status });
        await newDevice.save();
        res.status(201).json(newDevice);
    } catch (err) {
        console.error('Error inserting device:', err);
        res.status(500).send('Internal Server Error');
    }
  });
  

// Toggle device status
app.post('/api/devices', async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { device, status } = req.body;
        const existingDevice = await devicedetails.findOne({ name: device });
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

// Retrieve device status
app.get('/api/devices/:name', async (req, res) => {
    try {
        const deviceName = req.params.name;
        console.log('Device name requested: ${deviceName}');
        const device = await devicedetails.findOne({ name: deviceName });
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