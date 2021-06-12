const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const Items = new Schema({
    title: String,
    desc: {
        type: String,
        default: "testing project"
    },
    price: Number
})

module.exports = model('Items', Items);