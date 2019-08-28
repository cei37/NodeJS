require('../src/db/mongoose')

const User = require('../src/models/user')

//5d606496768e35ac9bb829fe
/*
User.findByIdAndUpdate('5d606496768e35ac9bb829fe', {
    age: 21
}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 30 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})

    return count
}

updateAgeAndCount('5d606496768e35ac9bb829fe', 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


