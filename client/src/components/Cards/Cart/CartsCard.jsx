import './cartCard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from 'react-use-cart';

export default () => {
  //State
  const [orders, setOrders] = useState();
  const [updateOrders, setUpdateOrders] = useState();

  //useEffect
  useEffect(() => {
    fetchOrders();
  }, []);

  //Function
  //Fetch orders
  const fetchOrders = async () => {
    //Fetch the orders
    const res = await axios.get('http://localhost:3000/orders')
    //set state
    setOrders(res.data.orders);
  };

  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    taxPrice = cartTotal * 0.08,
    Total = taxPrice + cartTotal,
  } = useCart();
  
//create 
  const createOrder = async (e) => {
    e.preventDefault();

    const newOrder = { 
      totalItems:totalItems,
      subTotal:cartTotal,
      tax:taxPrice,
      total:Total,
      orderItems:items.map((item)=>{
        return{
          discripition:item.discripition,
          price:item.price,
          qty:item.qty
        }
      }) 
              
    }

    //create the order
    const res = await axios.post('http://localhost:3000/orders', newOrder)
    //console.log(newOrder);
    //Update state
    setOrders(...orders, res.data.order)
  }
  
  //Delete the order
  const deleteOrder = async(_id)=>{
  const res = await axios.delete(`http://localhost:3000/orders/${_id}`)
  const newOrders = [...orders].filter(order=>{
    return order._id !==_id;
  })
  setOrders(newOrders)
  }
  
  //Update the order
  const updateOrder = async (e) => {
    e.preventDefault();

    const newOrder = { 
      _id:_id,
      totalItems:totalItems,
      subTotal:cartTotal,
      tax:taxPrice,
      total:Total,
      orderItems:items.map((item)=>{
        return{
          discripition:item.discripition,
          price:item.price,
          qyt:item.qty
        }     
      }) 
    }
    //Update state
    setUpdateOrders({...updateOrders, qty: e.target.value})
  }
  
  //check if the cart is empty or not message
  if (isEmpty) return <h3 className='text-center'> Your Cart is Empty</h3>;

  return (
    <section>
      <div className='shopingorder'>
        
        <h3>Thank you for shoping with us!</h3>
        <div className='cartdisplay'>
          <h4>Items in the Cart ({totalItems})</h4>
          <br />
          <p>Subtotal: ${cartTotal}</p>
          <p>Tax: ${taxPrice}</p>
          <hr />
          <p>Total: ${Total}</p>
          <div>
            <a href='ThankyouCard' target='_self' rel='noopener noreferrer'>
              <button onClick={emptyCart}className='buttons order'> Place Your Order</button>
            </a>
            <button onSubmit= {deleteOrder} onClick = {emptyCart} className='buttons order'> Cancel Order</button>
          </div>
        </div>
        <div className='orderdiplay'>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <img className='cartsmall' src={item.image} alt='ring image' />
                <div className='discription'>
                  {item.discription}
                </div>
                <div>
                ${item.price}
                </div>
                <div>
                  Qty:{item.quantity} 
                </div>

                <button
                  className='buttons minus'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className='buttons'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                
                <button className='delete' onClick={() => removeItem(item.id)}>
                  Delete
                </button>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <button 
                type='Submit'
                onClick= {createOrder}
                className='buttons order checkout'
                id='checkout'
              >
                Proceed CheckOut 
              </button>
      </div>
    </section>
  );
};
