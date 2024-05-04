const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image : {
    type : String,
    required : [true, "please select your background pic"]
  },
  profile_pic : {
    type : String,
    required : [true, "please select your profile picture"]
  },
  expertise : {
    type : [String],
    required : [true, "please enter your expertise"]
  },
  experience : {
    type : Number,
    required : [true, "please enter your experience"]
  },
  short_desc : {
    type : String,
    required : [true, "please enter the short work description"],
    maxlength : 255,
  },
  full_desc : {
    type : String,
    required : [true, "please enter the full description"] 
  },
  username : {
    type : String,
    required : [true, "please enter your username"],
    unique : true,
  },
  rating : {
    type : Number,
    required : false,
    min : 0,
    max : 5
  },
  avg_waiting_time : {
    type : String,
    required : [true, "please enter the average waiting time"]
  },  
  no_of_queries_solved : {
    type : Number,
    required : true,
    default : 0,
  },
  currently_solving : {
    type : Number,
    required : [true, "please enter the full description"],
    default : 0,
  },
  start_price : {
    type : Number,
    default : 0,
    required : [true, "please enter the start price"],
  }
})

module.exports = mongoose.model('Expert', userSchema);