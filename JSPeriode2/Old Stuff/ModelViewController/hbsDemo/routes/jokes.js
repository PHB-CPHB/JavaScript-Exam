var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");



/* GET home page. */
router.get('/jokes', function (req, res, next) {
  res.render('jokes', { jokes: jokes.getJokes, title: "Jokes" });
});

router.get('/', function (req, res, next){
    res.render('jokes',{jokes: jokes.getRandomJoke})
})

router.post("/", function (req, res, next) {
  var name = req.body.joke;
  persons.addJoke(joke);
  res.redirect("/");
});

module.exports = router;
