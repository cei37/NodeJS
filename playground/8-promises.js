/*
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([7,4,2])
        reject('This is an error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})*/

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

/*
add(1, 2).then((sum) => {
    add(sum, 2).then((sum) => {
        add(sum, 5).then((sum) => {
            console.log(sum)
        }).catch((e) => {
            console.log(e)
        })
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})*/


//Promise Chaining
//Once a promise has been called, it will start in pending state. 
//This means that the caller function continues the execution, while 
//it waits for the promise to do its own processing, and give the 
//caller function some feedback.

//At this point, the caller function waits for it to either return 
//the promise in a resolved state, or in a rejected state, but the 
//function continues its execution while the promise does it work.

add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).catch((e) => {
    console.log(e)
})