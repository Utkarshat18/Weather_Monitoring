const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    dt: Number,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number,
    },
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String,
    }],
    clouds: {
        all: Number,
    },
    wind: {
        speed: Number,
        deg: Number,
        gust: Number,
    },
    visibility: Number,
    pop: Number,
    sys: {
        pod: String,
    },
    dt_txt: String,
});

module.exports = mongoose.model('Weather', WeatherSchema);
