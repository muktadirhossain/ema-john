import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData/products.json";
import Product from "../products/Product";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

function Shop() {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  // Button Click Handler
  const handelClick = (product) => {
    setCart([...cart, product]);
    addToDb(product.id)
  };

  return (
    <div className="shop">
      <div className="shop-area">
        {products.map((pd) => (
          <Product key={pd.id} handelClick={handelClick} product={pd} addToCartBtn={true}></Product>
        ))}
      </div>

      <div className="cart-area">
      {/* <h1>this is Cart-area: {item.length}</h1> */}
      <Cart cart ={cart}></Cart>
      </div>
      
    </div>
  );
}

export default Shop;
