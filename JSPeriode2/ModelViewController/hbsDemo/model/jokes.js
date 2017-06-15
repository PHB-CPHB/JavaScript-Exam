var makeJokes = function () {
  var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];

  function addJoke(joke) {
    jokes.push(joke)
  }

  function getRandomJoke() {
    var i = Math.floor(Math.random() * (jokes.length))
    return jokes[i];
  }

  return {
    addJoke: function (joke) { addJoke(joke); },
    getRandomJoke: function () { var i = Math.floor(Math.random() * (jokes.length))
    return jokes[i]; },
    getJokes: function () { return jokes }
  }

};

module.exports = makeJokes();