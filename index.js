const zoauth = require('../zoauth')
const axios = require('axios')

zoauth.runAuthServer(res => {
    console.log(res.data)
    zoauth.getDetails('microsoft', res.data)
        .then(resp => {
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
        })
})