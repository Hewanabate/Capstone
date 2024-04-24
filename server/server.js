//Load env variables
require('dotenv').config();


//Import dependencies
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
const orderController = require('./controllers/orderController');

//create an express app
const app = express();

//Configure express app
app.use(express.json()); //make read json from request body
app.use(cors());//cross region

//connect to Database
connectToDb();

//Routing
app.get('/orders', orderController.fetchOrders);
app.get('/orders/:id', orderController.fetchOrder);
app.post ('/orders', orderController.createOrder);
app.put('/orders/:id', orderController.updateOrder);
app.delete('/orders/:id', orderController.deleteOrder);

//Start our server
app.listen(process.env.PORT);