const mongoose = require('mongoose');

const technicalExpertsSchema = new mongoose.Schema({
    image : {
        type : String,
        default : ''
    },
    profile_pic : {
        type : String,
        default : ''
    },
    username : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    expertise : {
        type : [String],
        required : true
    },
    experience  : { 
        type: String,
        required : true 
    },
    // no_of_queries_solved : {
    //     type : Number,
    //     default : 0
    // },
    avg_waiting_time : {
        type : String,
        default : 0
    },
    rating : {
        type : Number,
        default : 0
    },
    startprice : {
        type : Number,
        default : 0
    }

})

module.exports = mongoose.model('TechnicalExpert', technicalExpertsSchema);