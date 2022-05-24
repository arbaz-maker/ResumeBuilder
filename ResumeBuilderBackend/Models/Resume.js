const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
    Contact_Information: {
        FullName:{
            type: String,
            required: true,
            trim: true,
            maxlength:30
        },
        EmailAddress:{
            type: String,
            required: true,
            trim: true,
        },
        LinkedInProfileUrl:{
            type: String,
            required: true,
            trim: true,
        },
        ContactNumber:{
            type: String,
            required: true,
            trim: true,
            minlength:11,
            maxlength:12
        },
        Location:{
            type: String,
            required: true,
            trim: true,
            maxlength:20
        },

    },
    Education: [{
        type: String,
        trim: true
    }],
    Work_Experience:[{
        type: String,
        trim: true,
        minlength:50
    }]
})

const Resume = module.exports = mongoose.model("Resume", ResumeSchema,"Resume")

