var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function(req, res, next){
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        res.render('dog', { title: 'Dog API', imageUrl: data.message });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
