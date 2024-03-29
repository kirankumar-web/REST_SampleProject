const express=require('express')
const route=express.Router();
const createError=require('http-errors');
const mongoose = require('mongoose');

const Product=require('../Models/Product.model');
const { cast, ValidationError } = require('sequelize');
//async & await to get the all the list of product from database
route.get('/',async(req,res,next)=>{
    //res.send('getting all the list of the products')
     try {
        //const result=await Product.find({},{__v:0, _id:0,name:0,price:0});
        const result=await Product.find({},{__v:0});
        res.send(result);
     } catch (error) {
        console.log(error.message);
     }
})
//async way to send data into Database
route.post('/', async(req, res, next) => {
    try {
      const product=new Product(req.body);
      const result=await product.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') 
      {
         next(createError(422,error.message));
         return;
      }
        next(error);
    }
});
// promise way (use save option)
//route.post('/',(req, res, next) => {
//     console.log(req.body);
//     const product = new Product({
//         name: req.body.name,
//         price: req.body.price
//     });
//     product.save()
//         .then(result => {
//             console.log(result);
//             res.send(result); // Send the response inside the promise chain
//         })
//         .catch(err => {
//             console.log(err.message);
//             res.status(500).send(err.message); // Send the error message as the response
//         });
// });

// route.post('/',(req,res,next)=>{
//     console.log(req.body);
//     const product=new Product({
//         name: req.body.name,
//         price: req.body.price
//     })
//     product.save()
//     .then(result=> {
//         console.log(result);
//     })
//     .catch(err =>{
//        console.log(err.message);
//     })
//     res.send(result)
//     //res.send('creating the product')
// })
// get the single product by using its ID
route.get('/:id',async(req,res,next)=>{
   // res.send('getting the specific product')
   const id=req.params.id;
   try {
    const product= await Product.findById(id);
    //const product= await Product.findOne({_id:id});
    if (!product)
     {
        throw createError(404, "product doesn't Exist")
    }
    res.send(product);
   } catch (error) {
    console.log(error.message);
     if (error instanceof mongoose.CastError ) 
    {
     next(createError(400,"Invalid product ID"))
     return    
     }
    next(error);
   }
})
// updating specific product by using its id
route.put('/:id', async (req, res, next) => {
   const id = req.params.id;
   try {
     const option = { new: true };
     const update = req.body;
     const result = await Product.findByIdAndUpdate(id, update, option);
     if (!result) {
       throw createError(404, "Product doesn't exist");
     }
     res.send(result);
   } catch (error) {
     if (error instanceof mongoose.CastError) {
       next(createError(400, "Invalid product ID"));
       return;
     }
     // console.log(error.message);
     next(error);
   }
 });
 // updating specific product specific data by using its id 
route.patch('/:id',async(req,res,next)=>{
   const id=req.params.id;
   try {
    const update=req.body;
    const option={next: true};
    const result=await Product.findByIdAndUpdate(id,update,option);
    if (!result)
     {
      throw createError(404,"product doesn't Exist")
    }
    res.send(result);
    console.log(result);
   } catch (error) 
   {
    if (error instanceof mongoose.CastError) 
    {
      next(createError(400,"invalid Product ID"))
      return     
   }
    //console.log(error.message);
    next(error);
   }
})
route.delete('/:id',async(req,res,next)=>{
    const id=req.params.id;
    try {
    const result=await Product.findByIdAndDelete(id);
    if (!result) 
    {
     throw createError(404,"product doesn't Exist") 
    }
    res.send(result);
    console.log(result);
    } catch (error) {
     if (error instanceof mongoose.CastError) 
    {
       next(createError(400, "invalid Product ID"))
       return    
   }
       // console.log(error.message);
    next(error);
    }
   // res.send('delete the specific product')
})

module.exports= route;