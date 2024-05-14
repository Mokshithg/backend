const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
  password : {
    type : String,
    required : true
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

userSchema.pre('save', async function(next){
  if (this.isNew || this.isModified('password')){
    const saltRounds = 10;
    const handlePasswords = await bcrypt.hash(this.password, saltRounds);
    this.password = handlePasswords;
  }
  next();
});

module.exports = mongoose.model('Expert', userSchema);