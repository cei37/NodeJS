const mongoose = require('mongoose')
const validator = require('validator')

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('user', {
    name: {
        type: String,
        requiere: true,
        trim: true
    },
    password: {
        type: String,
        requiere: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password is not valid')
            }
        }
    },
    age: {
        type: Number,
        defult: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age most be a positive number')
            }
        }
    },
    email: {
        type: String,
        requiere: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

const Task = mongoose.model('task', {
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        requiere: false,
        default: false
    }
})
/*
const taks = new Task({
    description: 'This is a task for test',
    completed: false
})

taks.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}) */


const me = new User({
    name: '   Vicente Villegas  ',
    password: 'this is my yeah',
    email: '"&okas,yeah"@hotmail.com'
})

me.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

