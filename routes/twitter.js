console.log("EXPRESS server is starting...");
var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('./config');
var Sentiment = require('sentiment');

var sentiment = new Sentiment();
var T = new Twit(config);


router.post('/tweetSearch', async function (req, res, next) {
    let searchQuery = req.body.searchTerm;
    T.get('search/tweets', { q: searchQuery, count: 100 }, function(err, data, response) {
        res.send(data.statuses)
      })
})

router.post('/lastSevenDays', async function (req, res, next) {
  var weekAgo = new Date(new Date().setDate(new Date().getDate()-7));
  var day = weekAgo.getDate();
  var year = weekAgo.getFullYear();
  var month = weekAgo.getMonth() + 1;
  var weekAgoDay = ' since: '+year +'-'+'0'+month+'-'+day
  let searchQuery = req.body.searchTerm;
  T.get('search/tweets', { q: searchQuery + weekAgoDay, count: 100 }, function(err, data, response) {
      var tweets = data.statuses;
      let arr = [];
      let myMap = new Map();
      for(var i=0; i < tweets.length; i++){
        if(myMap.has(tweets[i].created_at.substring(4, 10))){
          myMap.set(tweets[i].created_at.substring(4, 10), myMap.get(tweets[i].created_at.substring(4, 10))+1)
        }else{
          myMap.set(tweets[i].created_at.substring(4, 10), 1)
        }
      }
      var itr = myMap.keys()
      for (const [key, value] of myMap.entries()) {
        let obj = {
          date: key,
          count: value
        }
        arr.push(obj)
      }
      res.send(arr)
    })
})

router.post('/sentiment', async function (req, res, next) {
  let searchQuery = req.body.searchTerm;
  T.get('search/tweets', { q: searchQuery, count: 100 }, function(err, data, response) {
    let tweets = data.statuses;
    let arr = [];
    let sentMap = new Map();
    for(var i = 0; i < tweets.length; i++){
      var result = sentiment.analyze(tweets[i].text);
      if(sentMap.has(result.score)){
        sentMap.set(result.score, sentMap.get(result.score) + 1)
      }else{
        sentMap.set(result.score, 1)
      }
    }
    var itr = sentMap.keys()
    for (const [key, value] of sentMap.entries()) {
      let obj = {
        score: key,
        count: value
      }
      arr.push(obj)
    }
      res.send(arr)
    })
})




module.exports = router;