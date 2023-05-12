const mongoose=require('mongoose');
const Schema=mongoose.Schema

const orderschema= new Schema({
    items : {
        type: Number,
        required: true
    },
    price : {
    type : Number,
    required : true
    },
    orderid:{
        type: Number,
        required: true
    },
    custinfo:
    {
        type : Object,
        required: true
     },
   orderdate:
   {
    type: String,
    required: true
   },
   paymentinfo:
   {
    type: String,
    required: true
   }
});

const Orders=mongoose.model('orders', orderschema)
module.exports=Orders;

