import React from 'react';
import pic from '../../asset/mahsa.jpg';

export default function Contact() {
  return (
    <div className='container row'>
      <div className='d-flex justify-content-center align-items-center flex-column col-md-6'>
        <h1>Mahsa Ghezel</h1>
        <h4>Front-End Developer</h4>

        <div className='email-box'>
          <p>
            <strong>Email: </strong> mahsa.ghezel.1995@gmail.com
          </p>
        </div>
        <div className='container btns'>
          <a
            href='https://www.linkedin.com/in/mahsaghezel/'
            className='contact-btn'
          >
            <i className='bi bi-linkedin s-icons'></i> LinkedIn
          </a>
          <a
            href='https://www.instagram.com/mahsa.gzl/'
            className='contact-btn'
          >
            <i className='bi bi-instagram s-icons'></i> Instagram
          </a>
          <a
            href='https://github.com/ghezel1995?tab=repositories'
            className='contact-btn'
          >
            <i className='bi bi-github s-icons'></i> GitHub
          </a>
        </div>
      </div>
      <div className='col-md-6 d-flex justify-content-center align-items-center'>
        <img className='contact-image' src={pic} alt='' />
      </div>
    </div>
  );
}
