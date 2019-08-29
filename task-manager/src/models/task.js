const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('task', {
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        requiere: true,
        default: false
    }
})

module.exports = Task