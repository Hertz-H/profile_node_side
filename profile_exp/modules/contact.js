
const req = require('express/lib/request');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const contact_schema=new Schema({
    name:{type: String, unique: true},
    link:{type: String, unique: true},
    active:{type: Number, default:1}
    
  });
  var contact=mongoose.model("contact",contact_schema);
  module.exports=contact;