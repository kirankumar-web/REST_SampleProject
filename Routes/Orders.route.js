const express = require('express');
const route1 = express.Router();
const Order = require('../Models/Order.model');

route1.get('/', async(req, res, next) => {
  //res.send('getting all the list of the orders');
  const result= await Order.find({},{__v:0,_id:0});
  res.send(result);
});
route1.post('/', async(req, res, next) => {
    try {
      const order=new Order(req.body);
      const result=await order.save();
      res.send(result);
    } catch (error) {
        console.log(error.message);
    }
});
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

route1.get('/:id', (req, res, next) => {
  res.send('getting the specific orders');
});

route1.put('/:id1', (req, res, next) => {
  res.send('updating the specific orders');
});

route1.patch('/:id2', (req, res, next) => {
  res.send('updating specific info of the orders');
});

route1.delete('/:id3', (req, res, next) => {
  res.send('delete the specific orders');
});
module.exports=route1;
