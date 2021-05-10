const {getRecords, createRecord, deleteRecord, updateEvent, likeEvent, getAuth} = require('../controllers/records');
const authMiddleware = require("../middleware/auth");

const eventRoutes = (app) => {

    app.get('/api/events', getRecords);
    app.post('/api/events', authMiddleware, createRecord);
    app.delete('/api/events/:id', authMiddleware, deleteRecord);
    app.patch('/api/events/:id', authMiddleware, updateEvent);
    app.patch('/api/events/likeevent/:id', authMiddleware, likeEvent);
}

module.exports = eventRoutes;