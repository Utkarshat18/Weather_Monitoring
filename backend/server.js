const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Weather = require('./models/Weather');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.post('/api/weather', async (req, res) => {
    try {
        const weatherData = new Weather(req.body);
        await weatherData.save();
        res.status(201).send(weatherData);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
