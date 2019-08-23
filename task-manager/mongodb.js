//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 20
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    /*
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*
    db.collection('users').updateOne({
        _id: new ObjectID("5d5dc33a8891e1a69cbb329c")
    }, {
        $set: {
            age: 20
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

    /*
    db.collection('users').findOne({name: 'Vicente'}, (error, user) => {
        if (error) {
            return console.log()
        }
        console.log(user)
    })

    db.collection('users').findOne({_id: new ObjectID('5d5dc4fb12ebc0a6b387d1ce')}, (error, user) => {
        if (error) {
            return console.log()
        }
        console.log(user)
    })*/

    /*
    db.collection('users').find({ age: 38 }).toArray((error, users) => {
        if (error) {
            return console.log(error)
        }
        console.log(users)
    })

    db.collection('users').find({ age: 38 }).count((error, count) => {
        if (error) {
            return console.log(error)
        }
        console.log(count)
    })*/

    /*
    db.collection('users').insertOne({
        name: 'Vicente',
        age: 38
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })*/

    /*
    db.collection('users').insertMany([{
        name: 'Rada',
        age: 38
    }, {
        name: 'Derek',
        age: 7
    }], (error, result) => {
        if (error) {
            return console.log('Unable to insert users')
        }
        console.log(result.ops)
    })*/

    /*
    db.collection('tasks').insertMany([{
        description: 'This is the first task',
        completed: true
    }, {
        description: 'This is the second task',
        completed: false
    }, {
        description: 'This is the third task',
        completed: false
    }], (error, result) => {
        if (error) {
            return console.log('Unable to insert users')
        }
        console.log(result.ops)
    }) */

    /*
    const id = new ObjectID()
    console.log(id)
    console.log(id.getTimestamp())

    db.collection('users').insertOne({
        _id: id,
        name: 'New Name',
        age: 100
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })*/
})