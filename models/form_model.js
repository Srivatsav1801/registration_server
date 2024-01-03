//import mongoose to create mongoose model
const mongoose = require('mongoose');

//create Schema
const Datas = new mongoose.Schema({
  firstname:{
    type :String,
    required: true    
  },
  lastname:{
    type :String,
    required: true    
  },
  username:{
    type :String,
    required: true    
  },
  email:{
    type :String,
    required: true    
  },
  password:{
    type :String,
    required: true    
  }
})

//export this Schema
const data_1 = mongoose.model('login_infos', Datas);

module.exports= data_1 