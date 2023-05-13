import React from 'react';
import images from '../../Helper/ImgFile';
import CommentBody from '../Pages/CommentBody';

export default function Fontend() {
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='mt-5'>
          <div className='text-center'>
          <img
            className='w-75 mx-auto rounded-5 border mb-3'
            src={images.pmg11}
            alt=''
          />
          </div>
          <h2>FullStack Developers</h2>
          <p className='lh-base text-justify text-start'>
            Full stack developers are those who have the ability to work on both
            the front-end and back-end of a web application. They have a broad
            range of skills and can handle both the client and server-side of a
            web application.
          </p>

          <p className='lh-base text-justify text-start'>
            On the front-end side, they are proficient in web development
            technologies like HTML, CSS, and JavaScript, as well as popular
            front-end frameworks like React, Vue, and Angular. They are skilled
            in creating user interfaces and experiences that are visually
            appealing, responsive, and functional.
          </p>

          <p className='lh-base text-justify text-start'>
            On the back-end side, full stack developers have knowledge of
            server-side programming languages such as Java, PHP, Python, Ruby,
            and Node.js. They are experienced in building scalable and efficient
            databases, APIs, and web services to support the front-end of an
            application.
          </p>
          <div className='border-start border-info p-3 m-5'>
            <p>
              In addition, full stack developers are proficient in other
              technologies and tools such as version control systems, web
              servers, and cloud computing services. Their ability to work on
              both the front-end and back-end of an application enables them to
              develop and deploy web applications from start to finish.
            </p>
          </div>
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
