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
            callback(undefined, { frcst: 'it is currently ' + body.current.temperature + ', & feels like ' + body.current.feelslike + '.' })
        }
    })
}
// console.log('it is currently ' + response.body.current.temperature + ' degrees, & feels like ' + response.body.current.feelslike)
module.exports = forecast  