const Product=require('../Models/Product.model');
const createError=require('http-errors');
const mongoose=require('mongoose');
module.exports=
{ 
 getAllProducts :async(req,res,next)=>
    {
        //res.send('getting all the list of the products')
         try {
            //const result=await Product.find({},{__v:0, _id:0,name:0,price:0});
            const result=await Product.find({},{__v:0});
            res.send(result);
         } catch (error) {
            console.log(error.message);
         }
    },
    createproduct : async(req, res, next) => {
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
    },
  getsingleproduct :async(req,res,next)=>{
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
 },

  updateAproduct : async (req, res, next) => {
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
  },
  updateAorderbyPATCH : async(req,res,next)=>{
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
 },
  DeleteAProduct :async(req,res,next)=>{
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
}
};