import React from 'react';
import bloom from '../../asset/bloom.png'

export default function Contact() {
  const AddMessageHandler = event => {
    event.preventDefault();
  }
  return (
    <div className='container mt-5 row justify-content-center'>
    <div className='col-12 col-lg-6'>
      <h4>Email</h4>
      <p> <i class="bi bi-envelope"  style={{color: '#6d9ee8'}}></i> Mahsa.ghezel.1995@gmail.com</p>
      <h4>LinkdIn</h4>
      <p><i class="bi bi-linkedin"  style={{color: '#6d9ee8'}}></i> Mahsa Ghezel</p>
      <img src={bloom} className='w-50' alt="" />
    </div>
      <div className='col-12 col-lg-6'>
      <p className='text-center mb-5'>
        If you have any suggestion, project or even you want to say Hello..
        please fill out the form below and I will reply you shortly.
      </p>
      <form className='row g-3' onSubmit={AddMessageHandler}>
        <div className='col-md-6'>
          <label className='form-label' htmlFor='inputName'>Name</label>
          <input
            type='text'
            id='inputName'
            class='form-control'
            placeholder='Name'
            aria-label='Name'
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor='inputEmail4' className='form-label'>
            Email
          </label>
          <input type='email' className='form-control' id='inputEmail4' placeholder='Email'/>
        </div>
        <div class='form-floating'>
          <textarea
            class='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea2'
            style={{ height: '100px' }}
          ></textarea>
          <label htmlFor='floatingTextarea2'>Message</label>
        </div>
        <div className='col-12'>
          <button
            type='submit'
            className='btn btn-outline-secondary mt-4 text-center'
          >
            Send
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
