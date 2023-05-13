import React from 'react';
import Navbar from '../UI/Navbar';
import { Outlet } from 'react-router-dom';
import './style.css';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='container main-body '>
        <Outlet />
      </div>
      <p className='container copy-right'>
        <i className='bi bi-c-circle'></i> 2023 All rights reserved with Mahsa
        Ghezel.
      </p>
    </>
  );
}
