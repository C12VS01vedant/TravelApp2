const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    
  
    category: {type:String,require:true},
    
})

const  Category=mongoose.model('category',categorySchema);

module.exports=Category;