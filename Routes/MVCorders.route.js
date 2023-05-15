const express = require('express');
const route1 = express.Router();
const Order = require('../Models/Order.model');
const createError=require('http-errors');
const mongoose=require('mongoose');
const Ordercontroller=require('../Controllers/Order.controller');

route1.get('/', Ordercontroller.getAllOrders);
route1.post('/', Ordercontroller.Createorder);

route1.get('/:id', Ordercontroller.getsingleorder);
route1.put('/:id', Ordercontroller.updateAOrder);
route1.patch('/:id', Ordercontroller.updateOrderusePatch);
route1.delete('/:id', Ordercontroller.DeleteAOrder);
module.exports=route1;
