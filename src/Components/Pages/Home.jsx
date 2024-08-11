import React from 'react';
import me from '../../asset/mahsa.jpg';
import './style.css';

export default function Home() {
  return (
    <div className='container-sm row'>
      <div className='col-12 col-lg-6  home-body'>
        <h1 className='my-name'>Mahsa Ghezel</h1>
        <h6 className='my-job'>Front-End Developer | Software Engineer</h6>
        <div className='me-icons'>
          <a
            href='https://www.linkedin.com/in/mahsaghezel/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-linkedin s-icons'></i>
          </a>
          <a
            href='https://github.com/ghezel1995?tab=repositories'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-github s-icons'></i>
          </a>
        </div>
        <a href='./Contact' className='btn btn-outline-secondary'>
          Contact Me
        </a>
      </div>
      <div className='col-12 col-lg-6  home-body'>
        <img
          src={me}
          className='w-50 rounded my-img d-none d-md-block'
          alt=''
        />
      </div>
    </div>
  );
}
