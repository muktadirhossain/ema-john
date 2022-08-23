import React from 'react'
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './component/ProductDetails/ProductDetails';
import PageNotFound from './component/404 page/PageNotFound';
import ReviewOrder from './component/ReviewOrder/ReviewOrder';
import Inventory from './component/Inventroy/Inventory';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/review-Order" element={<ReviewOrder/>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/" element={<Shop/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
