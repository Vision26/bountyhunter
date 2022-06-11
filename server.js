const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

app.listen(4000, () => {
    console.log('Server 4000 is up and running...')
})