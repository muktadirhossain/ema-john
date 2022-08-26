import React from 'react'
import {Link} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'





function Product(props) {
    const {handelClick, product, addToCartBtn} = props;

    const {name, price, seller, stock,id} = props.product;
  console.log(addToCartBtn);

  return (
    <div className='product-component'>
        <div>
            <img src={props.product.img} alt="" className='img' />
        </div>
        <div>
            <h2 className='title'>
                <Link to={`/product/${id}`}>{name}</Link>
            </h2>
            <p>Price : ${price}</p>
            <p><small>Sold By : {seller}</small></p>
            <p><small>Buy Now only {stock} left in our stock</small></p>
            
            {
              addToCartBtn && <button onClick={() => handelClick(props.product)} className='btn-addCart'><span className='ico-cart'><FontAwesomeIcon icon={faShoppingCart} /></span> Add to Cart</button>
            }
        </div>


    </div>
  )
}

export default Product