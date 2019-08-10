const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2];

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (!error) {
            forecast(data.latitude,data.longitude, (error, forecastData) => {
                if (!error) {
                    console.log(data.location)
                    console.log(forecastData)
                } else {
                    console.log(error)
                }
            })
        } else {
            console.log(error)
        }
    })
}