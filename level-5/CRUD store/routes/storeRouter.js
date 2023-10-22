const express = require("express")
const storeRouter = express.Router()
const Item = require('../models/item')


storeRouter.post("/", (req, res, next) => {
    const newItem = new Item(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedItem)
    })
})







storeRouter.get('/', (req, res, next) => {
    Item.find((err, item) => {

        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
    })







storeRouter.delete('/:itemId', (req, res, next) => {
    Item.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
        if(err){

            res.status(500)
            return next(err)
        }
        // console.log(deletedItem)
        return res.status(200).send(`Successfully deleted item ${deletedItem.item} from the database`)
    })
})







storeRouter.put('/:itemId', (req, res, next) => {
    Item.findByIdAndUpdate({_id: req.params.itemId}, req.body, {new:true}, (err, updatedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(updatedItem)
    })
})




module.exports = storeRouter