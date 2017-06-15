# Period-3 No-SQL

# Explain and Reflect
>## Explain, generally, what is meant by a NoSQL database.
NoSQL database, also called Not Only SQL, is an approach to data management and database design that's useful for very large sets of distributed data.

NoSQL, which encompasses a wide range of technologies and architectures, seeks to solve the scalability and big data performance issues that relational databases weren’t designed to address. NoSQL is especially useful when an enterprise needs to access and analyze massive amounts of unstructured data or data that's stored remotely on multiple virtual servers in the cloud.

Companies that use NoSQL include NetFlix, LinkedIn and Twitter.

>## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

### Pros
- Simplicity of design. (data does not have to be normalized. Just save everything you need, in a document, for a specific domain. Like db or test)
- Some operations are faster in NoSQL. (especially when your data needs are "non-relationel in nature - you typically store and request data from the same domain)
- Simpler "horizontal" scaling to clusters of machines. (Just add another machine to extend storage space. Speed will be almost constant)

### Cons
- NoSQL doesn't use ACID, which stands for Atomicity, Consistency, Isolation and Durability
- it compromises consistency in favor of availability
- No dedicated noSQL-language like SQL and lack of standardized interfaces (it's easier to design an ORM if you have this).
- it lacks huge previous investments in existing relational databases.


>## Explain how databases like MongoDB and redis would be classified in the NoSQL world
### MongoDB
Is a document oriented database. Documents are independent units which makes performance better (data is read contiguously off disk) and makes it easier to distribute data across multiple servers while preserving its locality. Application logic is easier to write. No need to translate between objects in your application and SQL queries, you can just turn the object model directly into a document. (sure, but you have ORM with SQL) Unstructured data can be stored easily, since a document contains whatever keys and values the application logic requires.

### redis
Redis is an open source, in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Basically key/value storage. Redis typically holds the whole dataset in memory, and saves to disk every two seconds.

>## Explain reasons to add a layer like Mongoose, on top of a schema-less database like MongoDB
The Mongoose layer adds a schema to MongoDB, which makes it much easier to handle the database.

Mongoose is an ORM-like tool for MongoDB. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. Mongoose adds another layer of robustness on top of MongoDB. Write less code, easier to read code (object modeling) and schema validation. MongoDB is schema-less and Mongoose adds schemas. This might seem counterintuitive at first... but Real life data has (often) structure and (often) types.

>## Explain, and demonstrate, using relevant examples, the strategy for querying MongoDB (all CRUD operations)
### Before operations
You first open a cmd window and log in to your mongoDB with "mongod", then you open another cmd window and write "mongo".
Inside the cmd window where you have written mongo, you then write "use db/test". You are now directly inside of you mongodb collection, here you can use the following commands

### Create operations
- For one insert
```
db.jokes.insertOne(
    {
     joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.",
     number: "1"
    }
);
```
- For many inserts
```
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

### Read operations
- Finds all the jokes and reads them:
```
db.jokes.find();
```
- Finds one specific joke and reads it:
```
db.jokes.find({joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all."});
```

### Update operations
- Updates one specific joke:
```
db.jokes.update(
  { joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.", number: "1" },
  { $set: { "number": "3" } }
);
```
- updates many jokes with the (multi: true) command. This operation updates all documents that have joke fields equal to "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all." and cuisine field equal to "1":
```
db.jokes.update(
  { joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all.", number: "1" },
  { $set: { "number": "3" } },
  { multi: true }
);
```

### Delete operations
- Deletes one specific joke:
```
db.jokes.deleteOne({joke: "Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all."});
```
- Deletes many jokes:
```
db.jokes.deleteMany([{number: "1"}, {number: "2"}]);
```

>## Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.

Indexes are special data structures that store a small portion of the collection’s data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. The ordering of the index entries supports efficient equality matches and range-based query operations. In addition, MongoDB can return sorted results by using the ordering in the index.

- You can create an index like this,
```
db.collection.createIndex( <key and index type specification>, <options> )
```
- I guess this is how I have used it in the code, which is I sort of create an index in the collection when I create a joke(db.collection("jokes").insertOne():
```
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

>## Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere
I have used MongoDB's special indexes to create some jokes in my "test" collection. I guess it is more like 2dSphere than TTL, don't know if this is right.
```
var jokes = [

    {
        "joke" : " Reality is an illusion created by a lack of alcohol",
        "type" : ["short", "alcohol", "quote"],
        "reference": { "author" : "Someone", "link" : ""},
        "lastEdited" : new Date()
    },
    {
        "joke" : "I used to think the brain was the most important organ. Then I thought, look whatâ€™s telling me that",
        "type" : ["short", "joke"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "You kill vegetarian vampires with a steak to the heart",
        "type" : ["short", "joke","foot"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "A blind man walks into a bar. And a table. And a chair",
        "type" : ["short", "joke","blind"],
        "reference": { "author" : "Someone", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    },
    {
        "joke" : "How does NASA organize their company parties? They planet",
        "type" : ["short", "joke","riddle"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    }
    ,
    {
        "joke" : "Why was six afraid of seven? Because seven was a well known six offender",
        "type" : ["short", "joke","riddle"],
        "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
        "lastEdited" : new Date()
    }
]

var result = db.jokes.insert(jokes);
printjson(result);
```

>## Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB
I have perfomed all the CRUD operations like this:

### Create operations
- Model/jokes.js
```
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

- routes/allJokes.js
```
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

### Read operations
- Model/jokes.js
```
exports.findJoke = function (id, callback) {
	let db = connection.get();
	let collection = db.collection("jokes");

	collection.findOne({"_id" : new ObjectId(id)}, (function (err,data){
        assert.equal(err,null);
        callback(data);
    }));
};
```

- routes/allJokes.js
```
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


### Update operations
- Model/jokes.js
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

- routes/allJokes.js
```
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


### Delete operations
- Model/jokes.js
```
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

- routes/allJokes.js
```
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


>## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
Adding a mongoose layer to the MongoDB adds a schema to your collection, which makes it less messy.
- Real life data (often) has structure
- Real life data (often) has types
- We want to do more with less work

Mongoose is an ORM-like tool for MongoDB. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box. Mongoose adds another layer of robustness on top of MongoDB. Write less code, easier to read code (object modeling) and schema validation. MongoDB is schema-less and Mongoose adds schemas. This might seem counterintuitive at first but Real life data has (often) structure and (often) types.

>## Explain the benefits from using Mongoose, and provide an example involving all CRUD operations
Mongoose provides a straight-forward, schema-based solution to modeling your application data and includes, out of the box:
- Schemas
- built-in type casting
- Validation
- Query building
- Business logic hooks (middleware)

#### Schema example
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
```
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
- CRUD example with mongoose
[CRUD example](https://github.com/KongBoje/Hand-in-3/blob/master/mongooseEx/api/api.js)

>## Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations
Benefits are already explained in the previous question.
- Here is a full example on a mongoose app with the CRUD operations:
[MongooseCRUD](https://github.com/KongBoje/Hand-in-3/tree/master/mongooseEx)

>## Explain how redis "fits" into the NoSQL world, and provide an example of how you have used it.
Redis is very fast, but the API is very 'atomic'. MongoDB will eat more resources, but the API is very very easy to use.

For example, if you require a lot of querying, that mostly means it would be more work for your developers to use Redis, where your data might be stored in variety of specialized data structures, customized for each type of object for efficiency. In MongoDB the same queries might be easier because the structure is more consistent across your data. On the other hand, in Redis, sheer speed of the response to those queries is the payoff for the extra work of dealing with the variety of structures your data might be stored with.

MongoDB offers simplicity, much shorter learning curve for developers with traditional DB and SQL experience. However, Redis's non-traditional approach requires more effort to learn, but greater flexibility.

- I don't think we have really used redis in this period.

>## Explain, using a relevant example, a full MEAN application (the A, can be an ionic application or replaced with an "R", for React) including relevant test cases to test the REST-API (not on the production database)
I have made a full MEAN application with both tests passing and the angular front-end(maybe later to become React) here:
[MEAN Application](https://github.com/KongBoje/Hand-in-3/tree/master/mongooseEx)
