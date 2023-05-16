require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const factRoutes = require('./routes/factRoutes');
const lieRoutes = require('./routes/lieRoutes');

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/facts', factRoutes);
app.use('/lies', lieRoutes);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})