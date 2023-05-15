const express = require('express');
const route1 = express.Router();
const Order = require('../Models/Order.model');
const createError=require('http-errors');
const mongoose=require('mongoose');
const Ordercontroller=require('../Controllers/Order.controller');

route1.get('/', async(req, res, next) => {
  //res.send('getting all the list of the orders');
  const result= await Order.find({},{__v:0,_id:1});
  res.send(result);
}
);
route1.post('/', async(req, res, next) => {
    try {
      const order=new Order(req.body);
      const result=await order.save();
      res.send(result);
    } catch (error) {
      if (error.name ==='ValidationError')
       {
          next(createError(422, error.message)); 
          return; 
      }
        //console.log(error.message);
        next(error);

    }
}
);
// route1.post('/', (req, res, next) => {
//   console.log(req.body);
//   const order = new Order({
//     items: req.body.items,
//     price: req.body.price,
//   });

//   order
//     .save()
//     .then(result => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err.message);
//       res.status(500).send('Error occurred while saving the order.');
//     });
// });

route1.get('/:id', async(req, res, next) => {
   const id=req.params.id;
   try {
    const order=await Order.findById(id);
    if (!order)
     {
       throw createError(404,"order does not exist");  
    }
    res.send(order);
   } catch (error) {
    if (error instanceof mongoose.CastError)
     {
     next(createError(400,"invalid product id"));
     return;  
    }
    next(error);
    //console.log(error.message);
   }
}
);
  //res.send('getting the specific orders');
route1.put('/:id',async(req, res, next) => {
  const id=req.params.id;
  try {
    const update=req.body;
    const option={next:true};
    const result=await Order.findByIdAndUpdate(id,update,option);
    if (!result)
     {
       throw createError(404,"order does not exist");  
    }
    res.send(result);
  } catch (error) {
    if (error instanceof mongoose.CastError) 
    {
      next(createError(400,"invalid order id"));
      return;
    }
    //console.log(error.message);
    next(error);
  }
}
);

route1.patch('/:id', async(req, res, next) => {
  //res.send('updating specific info of the orders');
  const id=req.params.id;
  const update=req.body;
  const option={new: true};
  try {
    const result= await Order.findByIdAndUpdate(id,update,option);
    if (!result) {
      throw createError(404,"order does not exist");
    }
    res.send(result);
  } catch (error) {
    //console.log(error.message);
    if (error instanceof mongoose.CastError)
     {
       next(createError(400,"invalid order id"));
       return;
    }
    next(error)
   }
 }
);

route1.delete('/:id', async(req, res, next) => {
  const id=req.params.id;
  try {
    const result=await Order.findByIdAndDelete(id);
    if (!result)
     {
       throw createError(404,"order does not Exist");  
    }
    res.send(result);
  } catch (error) {
    if (error instanceof mongoose.CastError)
     {
      next(createError(400,"invalid order id"));
      return;
    }
    //console.log(error.message)
    next(error);
  }
  //res.send('delete the specific orders');
});
module.exports=route1;
