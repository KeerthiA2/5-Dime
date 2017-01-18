var mongoose=require('mongoose');
var schema=mongoose.Schema;
var productsSchema=new mongoose.Schema({
productName:{type:String},
    department:{type:String},
    category:{type:String},
    brand:{type:String},
    size:{
          s:{type:Number},
            m:{type:Number},
            l:{type:Number},
          xl:{type:Number},
          xxl:{type:Number}
          },
    quantity:{type:Number},
    price:{type:Number},
    productDescription:{type:String}
    
},{collection:'products'});
module.exports=mongoose.model('products',productsSchema);