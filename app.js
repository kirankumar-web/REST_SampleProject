const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//mongodb+srv://kirankumaryadav:<password>@cluster1.b4ot2yq.mongodb.net/?retryWrites=true&w=majority
//kirankumaryadav
//Q0qzHN8jS9HF6UZ4
mongoose.connect('mongodb+srv://kirankumaryadav:Q0qzHN8jS9HF6UZ4@cluster1.b4ot2yq.mongodb.net/REST_PRODUCT_API').then(()=>
{
    console.log('mongodb connected---');
});

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
const Prodroute= require('./Routes/Products.routes')
 app.use('/products',Prodroute)

//  app.use((req,res,next)=>{
//     res.status(404)
//     res.send({
//         Error: 'not found'
//     })

//  })
 
 app.use((req,res,next)=>{
    const err=new Error("not found");
    err.status=404;
    next(err)
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
  app.listen(3001,()=>{
    console.log('server on 3001');
  })