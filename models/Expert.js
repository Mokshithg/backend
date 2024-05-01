const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  profile_pic : {
    type : String,
    required : true,
  },
  short_work_desc : {
    type : String,
    required : true,
    maxlength : 255,
  },
  username : {
    type : String,
    required : true,
    unique : true,
  },
  rating : {
    type : Number,
    required : true,
    min : 0,
    max : 5
  },
  no_of_queries_solved : {
    type : Number,
    required : true,
    default : 0,
  },
  currently_solving : {
    type : Number,
    required : true,
    default : 0,
  },
  full_desc : {
    type : String,
    required : false,
  }
})

module.exports = mongoose.model('Expert', userSchema);