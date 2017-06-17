const express = require("express");

const app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now() + "Log all request");
    next();
});

app.use(function (req, res, next) {
    req.statusCode = "Superuser";
    next();
});


app.listen(8080, function () {
    console.log("Server started")
});

app.get("/", (req, res) => {
    const status = req.statusCode;
    if (status == "Superuser") {
        res.send("Hello " + status);
    };
    res.send("Hahahah")
});

app.get("/world", (req, res) => {
    res.send("Hello World");
});

/*
    Dette er der samme som den anden get
app.get("/", function(req, res){
    
});
*/