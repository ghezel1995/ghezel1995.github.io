import React from 'react';
import pic from '../../asset/mahsa.jpg';

export default function Contact() {
  return (
    <div className='container row'>
      <div className='d-flex justify-content-center align-items-start flex-column col-md-6'>
        <div className='email-box  ms-3'>
          <h1 className='touch'>Let's get in touch!</h1>
          <h4>Mahsa Ghezel / Front-End Developer</h4>
          <p>
            <strong>Email: </strong> mahsa.ghezel.1995@gmail.com
          </p>
        </div>
        <div className='container btns'>
          <a
            href='https://www.linkedin.com/in/mahsaghezel/'
            className='contact-btn'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-linkedin s-icons'></i> LinkedIn
          </a>
          <a
            href='https://github.com/ghezel1995?tab=repositories'
            className='contact-btn'
            target='_blank'
            rel='noreferrer'
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
