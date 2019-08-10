const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0958583b662cdc9fe1cd66fbf02a6de9/'+ latitude +','+longitude
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location!  ' + body.error)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' It is currently '+body.daily.data[0].temperatureHigh)
        }
    })
}

module.exports = forecast