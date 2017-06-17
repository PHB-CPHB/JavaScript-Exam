# Period-3 No-SQL


### Explain, generally, what is meant by a NoSQL database.
- NoSQL is not a relational database.
- It usually does not use SQL.

### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

- Pros
    - Simplicity of design. (data does not have to be normalized. Just save everything you need, in a document, for a specific domain. Like db or test)
    - Some operations are faster in NoSQL. (especially when your data needs are "non-relationel in nature - you typically store and request data from the same domain)
    - Simpler "horizontal" scaling to clusters of machines. (Just add another machine to extend storage space. Speed will be almost constant)

- Cons
    - NoSQL doesn't use ACID, which stands for Atomicity, Consistency, Isolation and Durability
    - it compromises consistency in favor of availability
    - No dedicated noSQL-language like SQL and lack of standardized interfaces (it's easier to design an ORM if you have this).
    - it lacks huge previous investments in existing relational databases.


### Explain how databases like MongoDB and redis would be classified in the NoSQL world
- MongoDB
    - Document database.
        - Documents are independent units
        - Application logic is easier to write
        - Unstructured data can be stored easily

- Redis
    - Key-Value database.


### Explain reasons to add a layer like Mongoose, on top of a schema-less database like MongoDB
- Mongoose works with objects and are similar to ORM.
    - Schemas
    - Built-in type casting
    - Validation
    - Query building
    - Business logic hooks

### Explain, and demonstrate, using relevant examples, the strategy for querying MongoDB (all CRUD operations)
- Before operations
    - You first open a cmd window and log in to your mongoDB with "mongod", then you open another cmd window and write "mongo".
    - Inside the cmd window where you have written mongo, you then write "use db/test". You are now directly inside of you mongodb collection, here you can use the following commands

- Create operations
For one insert
```javascript
db.jokes.insertOne(
    {
     joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.",
     number: "1"
    }
);
```
For many inserts
```javascript
db.jokes.insertMany([
    {
     joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.",
     number: "1"
    },
    {
     name: "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
     number: "2"
    }
]);
```

Read operations
 Finds all the jokes and reads them:
```javascript
db.jokes.find();
```
Finds one specific joke and reads it:
```javascript
db.jokes.find({joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all."});
```

- Update operations
Updates one specific joke:
```javascript
db.jokes.update(
  { joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.", number: "1" },
  { $set: { "number": "3" } }
);
```

- Delete operations
Deletes one specific joke:
```javascript
db.jokes.deleteOne({joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all."});
```
Deletes many jokes:
```javascript
db.jokes.deleteMany([{number: "1"}, {number: "2"}]);
```

### Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB
I have perfomed all the CRUD operations like this:

- Create operations
Model/jokes.js
```javascript
exports.addJoke = function (jokeToAdd, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.insertOne(jokeToAdd, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(data);
        }
    })
};
```

routes/allJokes.js
```javascript
router.post("/addJoke", function (req, res, next) {
    jokemodule.addJoke(req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json("joke added");
        }
    });
});
```

- Read operations
Model/jokes.js
```javascript
exports.findJoke = function (id, callback) {
	let db = connection.get();
	let collection = db.collection("jokes");

	collection.findOne({"_id" : new ObjectId(id)}, (function (err,data){
        assert.equal(err,null);
        callback(data);
    }));
};
```

routes/allJokes.js
```javascript
router.get('/findJoke/:id', (req, res, next) => {
    let id = req.params.id;
    jokemodule.findById({ _id: ObjectId(id) }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});
```

- Update operations
Model/jokes.js
```
exports.editJoke = function (id, jokeToEdit, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.replaceOne({"_id": new ObjectId(id)}, jokeToEdit, function (err, data) {
        if(err) {
            callback(err);
        } else {
            callback("Joke edited" + data);
        }
    })
};
```

routes/allJokes.js
```javascript
router.put("/editJoke/:id", function (req, res, next) {
    jokemodule.editJoke(req.params.id, req.body, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json({ editedJoke: data })
        }
    })
});
```

- Delete operations
Model/jokes.js
```javascript
exports.deleteJoke = function (id, callback) {
    let db = connection.get();
    let collection = db.collection("jokes")

    collection.deleteOne({"_id": new ObjectId(id)}, function (err, data) {
        if(err) {
            callback(err);
        } else {
            callback("Joke deleted" + data);
        }
    })
};
```

routes/allJokes.js
```javascript
router.delete('/deleteJoke/:id', (req, res, next) => {
    jokemodule.deleteJoke(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
});
```

### Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
- Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes, out of the box:
    - Schemas
    - built-in type casting
    - Validation
    - Query building
    - Business logic hooks (middleware)

- Schema example
    - Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
```javascript
'use strict'

let mongoose = require("mongoose");

var JokeSchema = new mongoose.Schema(
    {
        joke: {type: String, required: true, minlength: 5},
        category: [String],
        reference: {author: String, link: String},
        lastEdited: {type: Date, default: Date.now}
    }
);

JokeSchema.pre('save', function(next){
    this.lastEdited = new Date();
    next();
});


let JokeModel= mongoose.model("Joke",JokeSchema);
module.exports = JokeModel;
```
CRUD example with mongoose
MISSING PICTURE
[CRUD example]()

### Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
Benefits are already explained in the previous question.

>## Explain, using a relevant example, a full MEAN application (the A, can be an ionic application or replaced with an "R", for React) including relevant test cases to test the REST-API (not on the production database)
I have made a full MEAN application with both tests passing and the angular front-end(maybe later to become React) here:
CHANGE PICTURE AND FINISH ASSIGNEMT!!!
[MEAN Application](https://github.com/KongBoje/Hand-in-3/tree/master/mongooseEx)