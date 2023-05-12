const express=require('express')
const app1=express();

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
