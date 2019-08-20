const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to server
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'This is the name for app'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'This is another name cei37'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some help',
        title: 'Help',
        name: 'Vicente Villegas'
    })
})

/*
app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('Hello Express Help!')
})

app.get('/about', (req, res) => {
    res.send('<H1>Hello About!</H1>')
})*/

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    } 

    console.log(req.query.address)
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (!error) {
            forecast(latitude,longitude, (error, forecastData) => {
                if (!error) {
                    res.send([{
                        location,
                        forecastData
                    }])
                } else {
                    res.send([{
                        error
                    }])
                }
            })
        } else {
            res.send([{
                error
            }])
        }
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search'
        })
    } 

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help Article not found',
        title: '404',
        name: 'Vicente Error help'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found.',
        title: '404',
        name: 'Vicente Generic Error'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})