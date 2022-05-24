const mongoose = require('mongoose')

const User = new mongoose.Schema({
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

const Users = module.exports = mongoose.model("Users", User,"Users")

// module.exports = Users