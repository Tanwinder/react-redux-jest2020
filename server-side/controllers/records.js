const mongoose = require('mongoose');
const Record = require("../models/records");


const getRecords = async (req, res) => {
    try {
        const fetchRecords = await Record.find();
        console.log("PostRecords=----", fetchRecords);
        setTimeout(() => {
            res.status(200).json(fetchRecords);
        }, 500)
        
    } catch(error) {
        res.status(404);
        res.json({ message: error.message});
    }
}
const createRecord = async (req, res) => {
    const {title, message, tags, selectedFile } = req.body;
    console.log("req.body=----", req.body);
    if(!req.userId) return res.status(401).send({message: 'unauthenticated user'});
    const newRecord = new Record({title, message, creator: `${req.firstName} ${req.lastName}`,tags, selectedFile });
    
    try {
        await newRecord.save();
        res.status(200).json(newRecord);
    } catch(error) {
        res.status(409);
        res.status(409).json({error: error});
    }
}

const deleteRecord = async (req, res) => {
    try {
        const {id } = req.params;
        if(!req.userId) return res.status(401).send("unauthorized user");
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const deletedRecord = await Record.findByIdAndRemove(id);
        console.log("deletedRecord", deletedRecord)

        res.json(deletedRecord);
    } catch (error) {
        res.status(409).json({error: error});
    }
}

const updateEvent = async (req, res) => {
    try {
        if(!req.userId) return res.status(401).send("unauthorized user");
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no event exist for id ${id}`);

        const { title, message} = req.body;
        const updatedEvent = await Record.findByIdAndUpdate(id, {title, message, _id:id}, {new: true});
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(409).json({error: error});
    }
}

const likeEvent = async (req, res) => {
    const { id } = req.params;
    if(!req.userId) return res.status(401).send("unauthorized user");
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no event exist for id ${id}`);

    const event = await Record.findById(id);
    const updatedEvent = await Record.findByIdAndUpdate(id, {likeCount: event.likeCount + 1}, {new: true});
    res.status(200).json(updatedEvent);
}

module.exports = {getRecords, createRecord, deleteRecord, updateEvent, likeEvent};