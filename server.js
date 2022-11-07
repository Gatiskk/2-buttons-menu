var express = require('express');
const productsData = require('./models/Products')
const productsLocations = require('./models/Countries')

// Create an instance of express
var app = express();
const hostname = 'localhost';
const port = 5000;

// Set different properties
app.set('view engine', 'ejs')
app.set('views', './views')

// Routes
app.get('/', function (req, res) {
    res.render('HomePage', {
        pageTitle: 'Welcome:)',
        welcomeMessage: 'Welcome To My Store'
    })
});

app.get('/menu1', function (req, res) {
    res.render('ShopPage', {
        pageTitle: 'Menu 1',
        message: 'All Items Are On Sale',
        products: productsData
    })
});

app.get('/menu2', function (req, res) {
    res.render('Locations', {
        pageTitle2: 'Menu 2',
        message2: 'Available Locations',
        countries: productsLocations
    })
});

// Our external route
var externalRoutes = require('./routes/MenuController');
app.use('/', externalRoutes);

// Listen to port 5000
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});