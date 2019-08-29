
//The word “async” before a function means one simple thing: 
//a function always returns a promise. Other values are 
//wrapped in a resolved promise automatically.
//So, async ensures that the function returns a promise, 
//and wraps non-promises in it.


//The keyword await makes JavaScript wait until that promise 
//settles and returns its result.

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    //const sum = await add(1, 7)
    //return sum
    //return await add(1, 7)
    console.log('calling sum1')
    const sum1 = await add(1, 1)

    console.log('calling sum2')
    const sum2 = await add(sum1, -3)

    console.log('calling sum3')
    const sum3 = await add(sum2, 5)

    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

