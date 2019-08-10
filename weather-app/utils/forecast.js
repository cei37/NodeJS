const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0958583b662cdc9fe1cd66fbf02a6de9/'+ latitude +','+longitude
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find location!  ' + response.body.error)
        } else {
            callback(undefined, 
                response.body.daily.data[0].summary + ' It is currently '+response.body.daily.data[0].temperatureHigh)
        }
    })
}

module.exports = forecast