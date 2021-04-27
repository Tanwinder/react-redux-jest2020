const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const recordRoutes = require('./routes/records');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
console.log("hello")
recordRoutes(app);

const CONNECTION_URL = 'mongodb+srv://Sid:XYfjYvROGMqHOJYA@cluster0.dkhrv.mongodb.net/sales_records?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`)
    })
})
.catch(error => console.log("mongoDb error", error));


