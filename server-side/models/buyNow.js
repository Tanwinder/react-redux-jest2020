const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const BuyNow = new Schema({
    orders: [{ 
        title: String,
        _id: String,
        desc: {
            type: String,
            default: "testing project"
        },
        price: Number
     }]
});

module.exports = model('BuyNow', BuyNow);