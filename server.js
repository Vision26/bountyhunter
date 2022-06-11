const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

//Set up mongoose.connect - Connected Data Base
mongoose.connect('mongodb://localhost:27017/storedb', 
() => console.log('Data Base Status: Connected.')
)

//Set up the route in server.js with error message
app.use('/store', require('./routes/storeRouter'))
app.use((err, req, res, next) => {
    return res.send({
        errMsg: err.message
    })
})

//Execute the server, set up in package.json first
app.listen(9000, () => {
    console.log('Server 9000 is up and running...')
})