const express = require('express')
const itemsRouter = express.Router()

const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


itemsRouter.route("/")
.get((req, res) => {
    res.send(items)
})

itemsRouter.route("/search/type")
.get((req, res) => {
    const query = req.query.type
    const filteredItems = items.filter(item => item.type === query)
    res.send(filteredItems)
})

itemsRouter.route("/search/price")
.get((req, res) => {
    console.log(req.query)
    const min = req.query.min
    const max = req.query.max
    const filteredByPrice = items.filter(item => {
        if (item.price > min && item.price < max){
            return item
        }
    })
    res.send(filteredByPrice)
})


module.exports = itemsRouter