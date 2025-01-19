console.log('Client side javascript file is loaded!')

const weatherL = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const logo = document.getElementById('logo')

weatherL.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    msg1.textContent = 'loading...'
    msg2.textContent = ''


    fetch('/weather?location=' + location + '').then((res) => {
        res.json().then((data) => {
            if (data.error) {
                logo.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-512/free-page-not-found-icon-download-in-svg-png-gif-file-formats--broken-link-error-message-web-404-illustration-user-interface-pack-icons-8233434.png?f=webp&w=128')
                return msg1.textContent = data.error
            }
            else {
                msg1.textContent = data.description
                logo.setAttribute('src', data.logo)
                msg2.textContent = 'In ' + data.location + ', ' + data.forecast + ' with ' + data.humidity + '% humidity'

            }

        })
    })

})