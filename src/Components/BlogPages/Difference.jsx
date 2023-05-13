import React from 'react';
import images from '../../Helper/ImgFile';
import './Difference.css';
import CommentBody from '../Pages/CommentBody';

export default function Difference() {
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='mt-5 '>
          <div className='text-center'>
          <img
            className='w-75 mx-auto rounded-5 border mb-3'
            src={images.pmg12}
            alt=''
          />
          </div>
          <h2>What's the Difference Between Front-End and Back-End?</h2>
          <p className='lh-base text-justify text-start'>
            Front-end and back-end are two important terms used in web
            development. Front-end refers to the part of a website or web
            application that the user interacts with, while back-end refers to
            the part of the website or application that the user does not see
            and includes the server, application, and database that power the
            website. Front-end development involves creating the user interface
            and experience that the user sees and interacts with on a website or
            application. This includes HTML, CSS, and JavaScript programming
            languages, as well as various front-end frameworks and libraries
            like React, Angular, and Vue. Back-end development, on the other
            hand, involves creating the server-side of a website or application.
            This includes creating the database, server, and application logic
            that runs in the background to power the website or application.
            Back-end developers typically use programming languages like PHP,
            Python, Ruby, or Java, as well as various frameworks like Django,
            Flask, Ruby on Rails, and Spring. In summary, front-end developers
            focus on the user interface and experience, while back-end
            developers focus on the server-side and logic that powers the
            website or application. Both are important and necessary for
            creating a fully functional and effective website or application.
          </p>
          <div className='border-start border-info p-3 m-5'>
            <p>
              Full-stack developers work with all parts of a website and use
              front-end and back-end coding skills.
            </p>
          </div>
        </div>
        <div className='post-footer row g-3 text-lg-center'>
          <div className='date-time-post col-12 col-lg-6'>
            <div className='row g-3 text-lg-start'>
              <p className='fs-6 col-12 col-lg-6'>
                <i className='bi bi-clock col me-0'></i> March 16, 2023
              </p>
              <p className='fs-6  col-12 col-lg-6'>
                <i className='bi bi-person col ms-0'></i>Mahsa
              </p>
            </div>
          </div>
          <div className='me-icons socialize  col-12 col-lg-6'>
            <i className='bi bi-instagram s-icons'></i>
            <i className='bi bi-linkedin s-icons'></i>
            <i className='bi bi-twitter s-icons'></i>
          </div>
        </div>
        <div className='text-center mt-2 mb-5 tags'>
          <label htmlFor='' className='m-2'>
            Tags:{' '}
          </label>
          <button className='me-2 bg-transparent border-0'>web</button>
          <button className='me-2 bg-transparent border-0'>design</button>
          <button className='me-2 bg-transparent border-0'>frontend</button>
          <button className='me-2 bg-transparent border-0'>ui</button>
          <button className='me-2 bg-transparent border-0'>progress</button>
        </div>
        <CommentBody />
      </div>
    </>
  );
}
