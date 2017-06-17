var express = require('express');
var router = express.Router();
var persons = require("../model/model");
var jokes = require("../model/jokes");
var session = require("express-session");



/* GET home page. */

// Person

persons.addTestData();

router.get('/', function (req, res, next) {
  if (req.session.username != "") {
  res.render('index', { persons: persons.getAll, title: "My List" });
  } else {
    res.redirect("/login")
  }
}); 

router.post("/", function (req, res, next) {
  var name = req.body.name;
  persons.addPerson(name);
  res.redirect("/");
});

// Jokes

router.get('/jokes', function (req, res, next) {
  if (req.session.username != "") {
  res.render('jokes.hbs', { jokes: jokes.getJokes, randomJoke: jokes.getRandomJoke, title: "Jokes" });
  } else {
    res.redirect("/login")
  }
});

router.post("/jokes", function (req, res, next) {
  var joke = req.body.joke;
  jokes.addJoke(joke);
  res.redirect("/jokes");
});

module.exports = router;
