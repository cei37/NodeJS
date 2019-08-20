console.log('hello world from app file')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    if (location) {
        messageOne.textContent = ''
        messageTwo.textContent = 'Loading data ...'

        fetch('/weather?address='+location).then((res)=> {
            res.json().then((data) => {

                if (data[0].error) {
                    console.log(data[0].error)
                    messageTwo.textContent = ''
                    messageOne.textContent =  data[0].error
                } else {
                    console.log(data[0].forecastData)
                    console.log(data[0].location)
                    messageOne.textContent =  data[0].location
                    messageTwo.textContent =  data[0].forecastData
                }
            })
        })
    }
})