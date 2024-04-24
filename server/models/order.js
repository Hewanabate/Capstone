const mongoose =  require('mongoose')

const orderSchema = new mongoose.Schema({
   totalItems: Number,
   subTotal: Number,
   tax:Number,
   total: Number,
    orderItems: [
      {
         discription:String,
         price:Number,
         qty:Number,
      }
   ] 
  });

  const Order = mongoose.model('Order',orderSchema)

  module.exports = Order;
 