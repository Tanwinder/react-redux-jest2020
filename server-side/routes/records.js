const express = require('express');
const {getRecords, createRecord, deleteRecord} = require('../controllers/records');

const recordRoutes = (app) => {
    app.get('/getrecords', getRecords);
    app.post('/createrecord', createRecord);
    app.delete('/deleterecord', deleteRecord);
}

module.exports = recordRoutes;