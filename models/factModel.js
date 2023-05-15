const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
    content: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Fact', factSchema)