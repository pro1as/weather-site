const { json } = require('express')
const request = require('postman-request')


const forecast = (lat, long, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=cc926b789c7c0a6564191ec5ab9c0635&query=' + lat + ',' + long

    request(url, { json: true }, (error, { body } = {}) => {
        if (error) {
            callback('error', undefined)
        }
        else if (body.error) {
            callback('not found', undefined)
        }
        else {
            callback(undefined, {
                frcst: 'It is currently ' + body.current.temperature + ' degrees out & feels like ' + body.current.feelslike + ' degrees',
                logo: body.current.weather_icons[0],
                description: body.current.weather_descriptions[0],
                humidity: body.current.humidity
            })
        }
    })
}
// console.log('it is currently ' + response.body.current.temperature + ' degrees, & feels like ' + response.body.current.feelslike)
module.exports = forecast  