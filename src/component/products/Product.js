import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'



function Product(props) {
    //console.log(props);
    const handelClick = props.handelClick;
    const {name, price, seller, stock} = props.product;


  return (
    <div className='product-component'>
        <div>
            <img src={props.product.img} alt="" srcset="" className='img' />
        </div>
        <div>
            <p className='title'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>By : {seller}</small></p>
            <p><small>Buy Now only {stock} left in our stock</small></p>
            <button onClick={()=> handelClick(props.product)} className='btn-addCart'><span className='ico-cart'><FontAwesomeIcon icon={faShoppingCart} /></span> Add to Cart</button>
        </div>


    </div>
  )
}

export default Product