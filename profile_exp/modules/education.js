const req = require('express/lib/request');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const education_schema=new Schema({
    field:{type: String},
    f_date:{type: Date},
    to_date:{type: Date},
    degree:{type: String, required: true},
    active:{type:Number,default:1}

});
const education=mongoose.model("education",education_schema);
module.exports=education;