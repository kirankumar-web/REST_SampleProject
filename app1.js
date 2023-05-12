const express=require('express')
const mongoose=require('mongoose');
const app1=express();
app1.use(express.json());
app1.use(express.urlencoded({extended : true}));

mongoose.connect('mongodb+srv://kirankumaryadav:Q0qzHN8jS9HF6UZ4@cluster1.b4ot2yq.mongodb.net/REST_PRODUCT_API').then(()=>
{
    console.log('mongodb connected---');
});
const Ordroute= require('./Routes/Orders.route');
const { Error } = require('sequelize');
app1.use('/orders', Ordroute)

// app1.use((req,res,next)=>{
//     res.status(404)
//     res.send({
//         Error :'not found'
//     })
// })
app1.use((req,res,next)=>{
    const err=new Error("not found");
    err.status=404;
    next(err)
})
app1.use ((err,req,res,next)=>{
    res.status(err.status||500);
    res.send({
        error:{
            status: err.status||500,
             message : err.message
        }
    })
})
app1.listen(3002,()=>{
    console.log("server on port 3002")
})
