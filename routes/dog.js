var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/', async function(req, res){
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    res.render('api', { title: 'YesNo API', answer: data.answer, image: data.image });
});

module.exports = router;
