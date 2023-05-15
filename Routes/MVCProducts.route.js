const express = require('express');
const route = express.Router();
const Product = require('../Models/Product.model');
const createError=require('http-errors');
const mongoose=require('mongoose');
const Productcontroller=require('../Controllers/Product.controller');

route.get('/', Productcontroller.getAllOrders);
route.post('/', Productcontroller.Createorder);

route.get('/:id', Productcontroller.getsingleorder);
route.put('/:id', Productcontroller.updateAOrder);
route.patch('/:id', Productcontroller.updateAorderbyPATCH);
route.delete('/:id', Productcontroller.DeleteAOrder);
module.exports=route;