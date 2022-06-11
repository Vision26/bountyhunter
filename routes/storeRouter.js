const express = require('express')
const storeRouter = express.Router()
const Store = require('../model/store.js')

//Router.get 
storeRouter.get('/', (req, res, next) => {
    Store.find((err, products) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(products)
    })
})

//Router.post
storeRouter.post('/', (req, res, next) => {
    const createProduct = new Store(req.body)
    createProduct.save((err, newProduct) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newProduct)
    })
})

//Router.delete
storeRouter.delete('/:storeId', (req, res, next) => {
    Store.findOneAndDelete({ _id: req.params.storeId }, (err, deleteProd) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(`${deleteProd} Deleted.`)
    })
})
module.exports = storeRouter