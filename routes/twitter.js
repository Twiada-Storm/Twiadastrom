console.log("The bot is starting...");
var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


router.post('/tweetSearch', async function (req, res, next) {
    let receivedData = {};
    T.get('search/tweets', { q: 'coronavirus', count: 10 }, function(err, data, response) {
        res.send(data.statuses)
      })
})


module.exports = router;