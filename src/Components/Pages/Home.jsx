import React from 'react';
import me from '../../asset/mahsa.jpg'
import './style.css';

export default function Home() {
  return (
    <div className='container row'>
      <div className='col-12 col-lg-6  home-body'>
        <h1 className='my-name'>Mahsa Ghezel</h1>
        <h6 className='my-job'>Front-End Developer / Software Engineer</h6>
        <div className='me-icons'>
          <i className='bi bi-instagram s-icons'></i>
          <i className='bi bi-linkedin s-icons'></i>
          <i className='bi bi-twitter s-icons'></i>
        </div>
        <button className='btn btn-outline-secondary'>Download CV</button>
      </div>
      <div className='col-12 col-lg-6  home-body'>
      <img src={me} className='w-50 rounded my-img' alt="" />
      </div>
    </div>
  );
}
