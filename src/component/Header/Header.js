import React from 'react'
import './Header.css';
import logo from '../../images/Logo.svg'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <img className='logo' src={logo} alt="" srcset="" />
        
        <nav className='nav-bar'>
        <Link to="/shop"> Shop </Link>
        <Link to="/review-Order"> Review Order </Link>
        <Link to="/inventory"> Manage Inventory </Link>
        </nav>

    </div>
  )
}

export default Header