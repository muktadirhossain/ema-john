import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import './ProductDetails.css'
import fakeData from '../../fakeData/products.json';
import Product from '../products/Product';




function ProductDetails() {
    const {id} = useParams();
    const product = fakeData.find(pd => pd.id === id);

    //console.log(product)
    
  return (
    <div>
      <Product 
      product={product} 
      addToCartBtn = {false}>
      </Product>
    </div>
  )
}

export default ProductDetails
