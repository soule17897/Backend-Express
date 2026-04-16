const mongoose = require('mongoose')

const computerSchemas = mongoose.Schema(
{
  usage : {type:String,require:True },
  CPU : {type:String,require:True },
  GPU : {type:String,require:True },
  SSD : {type:String,require:True },
  memory: {type:String,require:True },
  OS : {type:String,require:True },
  price : {type:String,require:True },
  currency : {type:String,require:True },

})
  


module.exports = mongoose.model('Computer',computerSchemas)