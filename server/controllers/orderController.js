const Order = require('../models/order');

const fetchOrders = async (req, res) => {
  //Find the orders
  const orders = await Order.find();
  //Respond with them
  res.json({ orders });
};

const fetchOrder = async (req, res) => {
  //Get id of the url
  const orderId = req.params.id;
  //Find the note using that id
  const order = await Order.findById(orderId);
  //Respond with order
  res.json({ order });
};

const updateOrder = async (req, res) => {
  //Get the id of the url
  const orderId = req.params.id;
  //Get the data of the req body

  const { discription, qty, price } = req.body;

  //Find and update the record
  await Order.findByIdAndUpdate(orderId, {
    discription,
    qty,
    price,
  });
  //Find updated order
  const order = await Order.findById(orderId);
  //Respond with it
  res.json({ order });
};

const createOrder = async (req, res) => {
  // Get the sent in date for the process order
  const  obj = new Order(req.body);

  //Create a order with it
  const order = await Order.create(obj);
  console.log(order);
  
  //respond with the new Order
  res.json({ order });
};

const deleteOrder = async (req, res) => {
  //Get id of the url
  const orderId = req.params.id;
  //Delete the record
  await Order.findByIdAndDelete(orderId);
  //Respond with order
  res.json({ success: 'Record Deleted' });
};

module.exports = {
  fetchOrders,
  fetchOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
