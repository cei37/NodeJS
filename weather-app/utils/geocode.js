const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiY2VpMzciLCJhIjoiY2p6NHE3aG1pMDJwajNicWlpNHc5Z3J3aiJ9.x4SKaflBHXGGgXOGki7O9w&limit=1'
    request({ url: geocodeUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation service!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location.', response.body.query)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    }) 
}

module.exports = geocode