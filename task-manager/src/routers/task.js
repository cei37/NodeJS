const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

router.get('/tasks', (req, res) => {
    console.log('yeah')
    Task.find().then((tasks) => {
        res.status(201).send(tasks)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

router.get('/tasks/:id', (req, res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        } 
        res.status(201).send(task)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!!'})
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        return res.status(400).send()
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            return res.status(404).send({error: 'No task found!'})
        }

        res.send(task)
    } catch(e) {
        res.status(500).send()
        console.log(e)
    }
})

module.exports = router