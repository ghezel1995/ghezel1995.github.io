import React from 'react';
import aboutImg from '../../asset/about.svg';
import Resume from './Resume';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='container-sm'>
      <div className='imageContainer'>
        <h6 className='welcome-msg' role='alert'>
          Hi there, So nice to see you in my page.
        </h6>
        <img
          src={aboutImg}
          alt='about img'
          className='about-img d-none d-md-block'
        />
      </div>
      <div className='about'>
        <h1>
          About <span className='span'>Me</span>
        </h1>
        <p className='about-p'>
          I am <span className='qoute'>Mahsa Ghezel</span>, a 28-year-old{' '}
          <span className='qoute'>software engineer</span> and{' '}
          <span className='qoute'>frontend developer</span>. I'm passionate
          about frontend development and aspire to become a professional in this
          field. With my strong foundation in programming and design, I'm eager
          to start my career in frontend development and bring my skills to the
          table. I'm excited about opportunities to work with dynamic teams and
          contribute to impactful projects. Thank you for considering me for a
          frontend developer position.
        </p>
        <h1>
          My <span className='span'>Resume</span>
        </h1>
        <p className='about-p'>
          I have expertise in a number of skills related to web development. I
          am skilled in{' '}
          <inspan className='qoute'>
            {' '}
            HTML, CSS, JavaScript, ReactJS, Bootstrap, responsive web design,
            Redux.js, TypeScript,MERN Stack(MongoDB, Express.js, React.js,
            Node.js), GitHub and Docker.
          </inspan>{' '}
          With these skills, I can design and develop high-quality websites and
          web applications that are both user-friendly and visually appealing. I
          am passionate about my work, and I am always eager to learn new
          technologies and techniques to improve my skills. I believe that my
          experience and skills make me a valuable asset to any team or project
          in need of a skilled and dedicated web developer.
        </p>
        <Resume />
        <div className='text-center'>
          <div className='btn btn-outline-secondary mt-4 mb-4 text-center'>
            <Link to='/contact' className='text-decoration-none '>
              Contact with me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
