const express = require('express');
const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const Record = new Schema({
    brand: String,
    type: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    expiredAt: {
        type: Date,
        default: new Date(),
    }
})

module.exports = model('Record', Record);