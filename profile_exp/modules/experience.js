const req = require('express/lib/request');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const experience_Schema=new Schema({
    title:{type: String},
    f_date:{type: Date},
    to_date:{type: Date},
    company:{type: String},
    description:{type: String},
    active:{type:Number,default:1}

});
const experience=mongoose.model("experience",experience_Schema);
module.exports=experience;