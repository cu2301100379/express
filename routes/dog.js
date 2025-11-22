var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const output = [{
                id: "dog1",
                url: data.message,
                width: 400,
                height: 300
            }];
            res.json(output);
        }
    });
});

module.exports = router;
