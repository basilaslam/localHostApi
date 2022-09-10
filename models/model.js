const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    ip: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)