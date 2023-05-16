const express=require('express')
const mongoose=require('mongoose');
const app1=express();
const createError=require('http-errors');
const dotenv=require('dotenv').config();
app1.use(express.json());
app1.use(express.urlencoded({extended : true}));

// mongoose.connect('mongodb+srv://kirankumaryadav:Q0qzHN8jS9HF6UZ4@cluster1.b4ot2yq.mongodb.net/REST_PRODUCT_API').then(()=>
// {
//     console.log('mongodb connected---');
// });
//initialise mongoose DB
require('./initDB')();
//const Ordroute= require('./Routes/Orders.route');
const Ordroute= require('./Routes/MVCorders.route'); 
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
const PORT1=process.env.PORT1 ||4000
console.log(PORT1);
app1.listen(PORT1,()=>{
    console.log("server on port "+PORT1);
})
