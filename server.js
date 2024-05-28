const bodyParser = require('body-parser');
const express = require('express');
const { registerdetails, trackStatus } = require('./db/user');
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

// Retrieve a device by name
app.get('/api/device/:name', async (req, res) => {
  try {
      const deviceName = req.params.name;
      const device = await devicedetails.findOne({ name: deviceName });
      if (!device) {
          return res.status(404).json({ error: 'Device not found' });
      }
      res.status(200).json(device);
  } catch (err) {
      console.error('Error retrieving device:', err);
      res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`))