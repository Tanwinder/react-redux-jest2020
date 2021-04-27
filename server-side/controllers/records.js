const express = require('express');
const mongoose = require('mongoose');

const Record = require("../models/records");


const getRecords = async (req, res) => {
    try {
        const fetchRecords = await Record.find();
        console.log("PostRecords=----", fetchRecords);

        res.status(200).json(fetchRecords);

    } catch(error) {
        res.status(404);
        res.json({ message: error.message});
    }
}
const createRecord = async (req, res) => {
    const {brand, type, message, creater, tags, selectedFile } = req.body;
    const newRecord = new Record({brand, type, message, creater, tags, selectedFile});
    console.log("req.body=----", req.body);
    try {
        await newRecord.save();
        res.status(200).json(newRecord);
    } catch(error) {
        res.status(409);
        res.json({ message: error.message});
    }
}

const deleteRecord = async (req, res) => {
    const {id } = req.params;
    const deletedrecord = Record.findByIdAndDelete(id);
    console.log("req.body=----", req.params);
    try {
        res.status(200).json(deletedrecord);
    } catch(error) {
        res.status(409);
        res.json({ message: error.message});
    }
}

module.exports = {getRecords, createRecord, deleteRecord};