const mongoose=require('mongoose');

module.exports=()=>
{
    mongoose.connect('mongodb+srv://kirankumaryadav:Q0qzHN8jS9HF6UZ4@cluster1.b4ot2yq.mongodb.net/REST_PRODUCT_API')
.then(()=>
{
    console.log('mongodb connected....');
})
.catch(err => console.log(err.message));
mongoose.connection.on('connected',()=>{
    console.log("mongoose connected to database");
})
mongoose.connection.on('error',(err)=>{
    console.log(err.message);
})
mongoose.connection.once('disconnected', () => {
    console.log("mongoose connection is disconnected....");
  });
  
  process.on('SIGINT', async () => {
    try {
      await mongoose.disconnect();
      console.log("mongoose connection is disconnected due to app termination");
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });
  
}