import React from 'react';
import Post from '../../Helper/Post';
import { useParams, useNavigate } from 'react-router-dom';

export const Posts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = Post.find((post) => post.id === parseInt(id));

  const handleBack = () => {
    navigate(-1);
  };

  if (!post) return <div>Post not found</div>;
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='mt-5'>
          <div className='text-center'>
            <img
              src={post.img}
              alt={post.title}
              className='w-50 mx-auto rounded-5 border mb-3'
            />
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className='border-start border-info p-3 m-5'>
            <p>
              <h6>{post.qouteTitle}</h6>
              {post.qoute}
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
        <div className='back-button-container'>
          <button
            onClick={handleBack}
            className='back-button'
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};
