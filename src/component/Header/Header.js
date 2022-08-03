import React from 'react'
import './Header.css';
import logo from '../../images/Logo.svg'

function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt="" srcset="" />
        <nav className='nav-bar'>
        <a href="/.shop">Shop</a>
        <a href="/manage-order">Order</a>
        <a href="/inventory">Manage Inventory</a>
        </nav>
    </div>
  )
}

export default Header