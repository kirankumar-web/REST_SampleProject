const mongoose =require('mongoose')
const Schema=mongoose.Schema

const Productschema= new Schema({
    name : {
        type: String,
        required: true
    },
    price :{
        type : Number,
        required : true
    }
});

const Product=mongoose.model('product', Productschema)
module.exports=Product;
