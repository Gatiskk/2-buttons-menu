module.exports = (function() {
    'use strict';
    var externalRoutes = require('express').Router();

    externalRoutes.get('/menu1', function (req, res) {
        res.render('http://localhost:5000/menu1')
});
    externalRoutes.get('/menu2', function (req, res) {
        res.render('http://localhost:5000/menu2')
    });
    
    return externalRoutes;
})();
