// const express=require('express')
// const route1=express.Router();

// route1.get('/',(req,res,next)=>{
//     res.send("getting all the orders")
// })
// route1.post('/',(req,res,next)=>{
//     res.send("creating the order")
// })
// route1.get('/:id',(req,res,next)=>{
//     res.send("getting the specific order")
// })
// route1.put('/:id1',(req,res,next)=>{
//     res.send("updating the order")
// })
// route1.patch('/:id2',(req,res,next)=>{
//     res.send("updating specific info order")
// })
// route1.delete('/:id3',(req,res,next)=>{
//     res.send("deleting the order")
// })

// module.export= route1;

const express=require('express')
const route1=express.Router();

route1.get('/',(req,res,next)=>{
    res.send('getting all the list of the orders')
})
route1.post('/',(req,res,next)=>{
    res.send('creating the orders')
})
route1.get('/:id',(req,res,next)=>{
    res.send('getting the specific orders')
})
route1.put('/:id1',(req,res,next)=>{
    res.send('updating the specific orders')
})
route1.patch('/:id2',(req,res,next)=>{
    res.send('updating specific info of the orders')
})
route1.delete('/:id3',(req,res,next)=>{
    res.send('delete the specific orders')
})

module.exports= route1;