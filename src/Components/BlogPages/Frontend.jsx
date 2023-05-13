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
            src={images.pmg13}
            alt=''
          />
          </div>
          <h2>Front-End Developers</h2>
          <p className='lh-base text-justify text-start'>
            Front-end developers are responsible for creating the user interface
            and visual elements of a website or application. They use their
            skills in HTML, CSS, JavaScript, and other programming languages to
            build and design the front end of websites or applications that
            users interact with directly.
          </p>

          <p className='lh-base text-justify text-start'>
            Front-end developers work closely with UI/UX designers, who provide
            them with mockups and design concepts. They are responsible for
            turning these designs into functioning web pages or applications.
            This includes creating responsive designs that work well on
            different devices and screen sizes.
          </p>
          <div className='border-start border-info p-3 m-5'>
            <p>
              In addition to their technical skills, front-end developers need
              to have a good eye for design and user experience. They need to
              understand the principles of good design and be able to apply them
              to their work.
            </p>
          </div>
          <p className='lh-base text-justify text-start'>
            Front-end developers often work closely with back-end developers to
            ensure that the front-end of a website or application works
            seamlessly with the back-end. They also need to be familiar with
            version control tools such as Git and be able to work
            collaboratively with other developers on a team.
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
