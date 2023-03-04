const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type : String, minLength : 1},
    cost: {type : Number, minLength : 1},
    description : { type : String, maxLength : 255},
    slug : {type : String },
    createAt : { type : Date, default : Date.now()},
    updateAt : { type : Date, default : Date.now()}
});
  
module.exports = mongoose.model("course",Course,"course")