const {getItems, createItems, buyNow} = require('../controllers/items');
// const authMiddleware = require("../middleware/auth");
const express = require('express');

const router = express.Router();

    router.get('/', getItems);
    router.post('/', createItems);
    router.post('/buynow', buyNow);
    // app.delete('/api/events/:id', authMiddleware, deleteRecord);
    // app.patch('/api/events/:id', authMiddleware, updateEvent);
    // app.patch('/api/events/likeevent/:id', authMiddleware, likeEvent);

module.exports = router;