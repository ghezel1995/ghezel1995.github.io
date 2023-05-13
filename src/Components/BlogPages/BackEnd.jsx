import React from 'react';
import images from '../../Helper/ImgFile';
import './Difference.css';
import CommentBody from '../Pages/CommentBody';

export default function Difference() {
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='mt-5'>
          <div className='text-center'>
          <img
            className='w-75 mx-auto rounded-5 border mb-3'
            src={images.pmg14}
            alt=''
          />
          </div>
          <h2>Back-End Developers</h2>
          <p className='lh-base text-justify text-start'>
            Back-end developers are responsible for the server-side development
            of web applications. They work on the underlying logic, database
            interactions, and server configuration that power the front-end of a
            website or web application. Back-end developers typically use
            server-side programming languages such as Python, Ruby, Java, PHP,
            or Node.js, and frameworks such as Django, Ruby on Rails, Spring,
            Laravel, or Express.js to build the server-side of a web
            application.
          </p>
          <div className='border-start border-info p-3 m-5'>
            <p>
              <h6>Back-end developer vs. back-end engineer</h6>
              Back-end developers and engineers have similar technical skills,
              but different responsibilities. A back-end developer is like a
              teacher, whereas a back-end engineer is like a school principal
              who creates the big-picture strategy. Back-end developers tend to
              focus on smaller parts of the whole, such as applications and
              programs, working with teams to prove their design methods are
              viable.
            </p>
          </div>
          <p className='lh-base text-justify text-start'>
            Back-end developers also work with databases, which are used to
            store and manage data. They need to be proficient in SQL, which is
            the standard language for managing databases. They use SQL to create
            and manage tables, run queries, and ensure that the data is properly
            stored and retrieved. Other tasks of back-end developers include
            integrating the back-end with third-party services and APIs,
            implementing security measures to protect the application from cyber
            threats, and monitoring and optimizing the application's
            performance. In summary, back-end developers are responsible for
            building and maintaining the behind-the-scenes infrastructure that
            powers a web application, and ensuring that it runs smoothly,
            securely, and efficiently.
          </p>
          <h6 className='mb-5'>Reference: chatGPT</h6>
          
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
