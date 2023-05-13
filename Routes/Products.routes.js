const express=require('express')
const route=express.Router();

const Product=require('../Models/Product.model')
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
route.get('/:id',async(req,res,next)=>{
   // res.send('getting the specific product')
   const id=req.params.id;
   try {
    //const product= await Product.findById(id);
    const product= await 
    Product.findOne({_id:id});

    res.send(product);
   } catch (error) {
    console.log(error.message);
   }
})
// updating product by using its id
route.put('/:id',async(req,res,next)=>{
const id=req.params.id;
try {
const option={new :true};
const update=req.body;
const result=await 
Product.findByIdAndUpdate(id,update,option);
res.send(result);
} 
catch (error) {
 console.log(error.message);
}
    //res.send('updating the specific product')
})
route.patch('/:id2',(req,res,next)=>{
    res.send('updating specific info of the product')
})
route.delete('/:id',async(req,res,next)=>{
    const id=req.params.id;
    try {
        const result=await Product.findByIdAndDelete(id);
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
   // res.send('delete the specific product')
})

module.exports= route;