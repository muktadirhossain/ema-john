import React from 'react';
import './Cart.css';

function Cart({cart}) {
  // total price calculating using resuce method//
  const total = cart.reduce( (total,cart) => total + cart.price , 0);

  // shipping fee logic//
  let shippingFee = 0;
  if (total > 12 && total< 35) {
    shippingFee = 4.99;
  }
  else if(total > 35){
    shippingFee = 0
  }

  return (
    <div className='cart'>
    <h2>Order Summary</h2>
    <h3>Items Ordered :  {cart.length}</h3>
    <h3>Total Price:     {total}</h3>
    <h3>Shipping & Handling:  {shippingFee}</h3>
    <h3>Estimated Tax (1.5%):  {Number((total * 0.015).toFixed(2))} </h3>
    <h3>Order Total:          {total + shippingFee + (total * 0.015)} </h3>
    <div className='btn-div'><button className='btn-addCart'>Review Order</button></div>
    
    </div>
  )
}

export default Cart