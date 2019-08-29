const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send()
    }
})

router.get('/users', (req, res) => {
    User.find().then((users) => {
        res.status(201).send(users)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

router.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        } 
        res.status(201).send(user)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!!'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        return res.status(400).send()
        console.log(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send({error: 'No user found!'})
        }

        res.send(user)
    } catch(e) {
        res.status(500).send()
        console.log(e)
    }
})

module.exports = router
