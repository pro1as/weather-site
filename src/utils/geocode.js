const request = require('postman-request')


const geoCode = (address, callback) => {
    const URL = 'https://api.api-ninjas.com/v1/geocoding?city=' + encodeURIComponent(address) + ''
    request(URL, { headers: { 'X-Api-Key': 'NR9s10KJqBZFBCSptEDqLy3iE9zdQuvDBdCinbpG' } }, (error, { body } = {}) => {
        if (error) { callback('unable to connect', undefined) }
        else {
            const geoRes = JSON.parse(body)
            callback(error, geoRes[0])
        }
        // console.log('lat ' + geoRes[0].latitude + ' long ' + geoRes[0].longitude)
    })
}

module.exports = geoCode