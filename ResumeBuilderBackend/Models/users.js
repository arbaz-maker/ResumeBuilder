const mongoose = require('mongoose')

const ResumeBuilder = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        trim: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true
    }
})

const users = mongoose.model('users', ResumeBuilder)

module.exports = users