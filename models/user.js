const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    profilePic: {
        type: String, 
    },
    country: {
        type: String
    },
    hobbies: {
        type: [String]
    },
    role: {
        type: String,
    },
    areasOfInterest: {
        type: [String],
    },
    qualification: {
        type: String,
    },
    education: [{
        collegeName: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
        address: {
          type: String,
        },
    }],
    workExperience: [{
        company: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
        address: {
          type: String,
        },
    }],
    personalWebsite: {
        type: String,
    }
});

module.exports = mongoose.model('Users', usersSchema);