const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path:{
        type: String,
        required: true
    },
    files: []
}, {
        timeStamp: true
    });

module.exports = mongoose.model('File', File);