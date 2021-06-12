const mongoose = require('mongoose');
const Items = require("../models/items");
const BuyNow = require("../models/buyNow")


const getItems = async (req, res) => {
    try {
        const fetchRecords = await Items.find();
        console.log("PostRecords=----", fetchRecords);
        setTimeout(() => {
            res.status(200).json(fetchRecords);
        }, 500)
        
    } catch(error) {
        res.status(404);
        res.json({ message: error.message});
    }
}
const createItems = async (req, res) => {
    const {title, desc, price } = req.body;
    // console.log("req.body=----", req.body);
    // if(!req.userId) return res.status(401).send({message: 'unauthenticated user'});
    const newRecord = new Items({title, desc, price });
    
    try {
        await newRecord.save();
        res.status(200).json(newRecord);
    } catch(error) {
        res.status(409);
        res.status(409).json({error: error});
    }
}

const buyNow = async (req, res) => {
    const item = req.body;
    console.log("req.body.item=----", req.body);
    // if(!req.userId) return res.status(401).send({message: 'unauthenticated user'});
    const newRecord = new BuyNow(item);
    
    try {
        await newRecord.save();
        res.status(200).json({message: "succesfully submitted the order",newRecord});
    } catch(error) {
        res.status(409);
        res.status(409).json({error: error});
    }
}


module.exports = {getItems, createItems, buyNow};