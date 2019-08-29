const express = require('express')
require('./db/mongoose')
//const User = require('./models/user')
//const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ', port)
})

//const router = new express.Router()


/*
app.post('/users', (req, res) => {
    //console.log(req.body)
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})
*/
/*
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(200).send(user)
    } catch(e) {
        res.status(400).send()
    }
})

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.status(201).send(users)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

app.get('/users/:id', (req, res) => {
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

app.patch('/users/:id', async (req, res) => {
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

app.delete('/users/:id', async (req, res) => {
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
*/

/*
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e)=> {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    console.log('yeah')
    Task.find().then((tasks) => {
        res.status(201).send(tasks)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})

app.get('/tasks/:id', (req, res) => {
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

app.patch('/tasks/:id', async (req, res) => {
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

app.delete('/tasks/:id', async (req, res) => {
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
*/

