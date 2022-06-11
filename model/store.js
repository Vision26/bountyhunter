const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Blueprint
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    productType:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    }, 

    description:{
        type: String,
        required: true
    },

    brand:{
        type: String,
        required: true
    }
})

//Generate Model
module.exports = mongoose.model('Store', storeSchema)