console.log("EXPRESS server is starting...");
var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);


router.post('/tweetSearch', async function (req, res, next) {
    let searchQuery = req.body.searchTerm;
    T.get('search/tweets', { q: searchQuery, count: 10 }, function(err, data, response) {
        res.send(data.statuses)
      })
})


module.exports = router;