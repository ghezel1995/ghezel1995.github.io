import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark py-3 py-3 sticky-top'>
        <div className='container'>
          <h3 className='navbar-brand'>Mahsa Ghezel</h3>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav ms-auto'>

              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='products' className='nav-link'>
                  Products
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='portfolio' className='nav-link'>
                  Portfolio
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='about' className='nav-link'>
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='contact' className='nav-link'>
                  Contact
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='blog' className='nav-link'>
                  Blog
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
