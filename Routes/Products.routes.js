const express=require('express')
const route=express.Router();

route.get('/',(req,res,next)=>{
    res.send('getting all the list of the products')
})
route.post('/',(req,res,next)=>{
    console.log(req.body);
    res.send('creating the product')
})
route.get('/:id',(req,res,next)=>{
    res.send('getting the specific product')
})
route.put('/:id1',(req,res,next)=>{
    res.send('updating the specific product')
})
route.patch('/:id2',(req,res,next)=>{
    res.send('updating specific info of the product')
})
route.delete('/:id3',(req,res,next)=>{
    
    res.send('delete the specific product')
})

module.exports= route;