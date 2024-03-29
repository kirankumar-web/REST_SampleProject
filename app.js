const express=require('express');
const mongoose=require('mongoose');
const createError=require('http-errors');
const app=express();
const dotenv=require('dotenv').config()

//console.log(dotenv.parsed);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialise mongoose DB
require('./initDB')();
//mongodb+srv://kirankumaryadav:<password>@cluster1.b4ot2yq.mongodb.net/?retryWrites=true&w=majority
//kirankumaryadav
//Q0qzHN8jS9HF6UZ4
// mongoose.connect('mongodb+srv://kirankumaryadav:Q0qzHN8jS9HF6UZ4@cluster1.b4ot2yq.mongodb.net/REST_PRODUCT_API')
// .then(()=>
// {
//     console.log('mongodb connected....');
// })
// .catch(err => console.log(err.message));
// mongoose.connection.on('connected',()=>{
//     console.log("mongoose connected to database");
// })
// mongoose.connection.on('error',(err)=>{
//     console.log(err.message);
// })
// mongoose.connection.once('disconnected', () => {
//     console.log("mongoose connection is disconnected....");
//   });
  
//   process.on('SIGINT', async () => {
//     try {
//       await mongoose.disconnect();
//       console.log("mongoose connection is disconnected due to app termination");
//       process.exit(0);
//     } catch (error) {
//       console.error(error);
//       process.exit(1);
//     }
//   });
  
 //app.all('/test/:id/:user',(req,res)=> {
    // console.log(req.query);
    // console.log(req.query.name);
    // console.log(req.query.id);
    // res.send(req.query);
    //console.log(req.params);
    //res.send(req.params);
    app.all('/test',(req,res)=> {

    console.log(req.body);
    res.send(req.body);
});
//const Prodroute= require('./Routes/Products.routes')
const Prodroute= require('./Routes/Products.routes')

 app.use('/products',Prodroute)
//  app.use((req,res,next)=>{
//     res.status(404)
//     res.send({
//         Error: 'not found'
//     })

//  })
 
 app.use((req,res,next)=>{
    // const err=new Error("not found");
    // err.status=404;
    // next(err)
    next(createError(404,'Not Found'));
})
app.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.send({
        error:{
            status: err.status||500,
            message: err.message
        }
    })

})
  const PORT= process.env.PORT || 4000
  app.listen(PORT,()=>{
    console.log('server on '+PORT);
  })