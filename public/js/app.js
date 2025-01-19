console.log('Client side javascript file is loaded!')

const weatherL = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherL.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    msg1.textContent = 'loading...'
    msg2.textContent = ''

    fetch('http://localhost:3000/weather?location=' + location + '').then((res) => {
        res.json().then((data) => {
            if (data.error) {

                return msg1.textContent = data.error
            }
            else {
                msg1.textContent = 'Weather details:'
                msg2.textContent = 'In ' + data.location + ' ' + data.forecast + ''
                console.log('In ' + data.location, data.forecast)
            }

        })
    })

})