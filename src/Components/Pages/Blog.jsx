import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from '../../Helper/Post';

export default function Blog(props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    setPost(Post);
  }, []);
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1 className='mb-4'>Blog</h1>
        <div className='container'>
          <div className='row g-3 mb-5'>
            {post.map((myPost) => {
              return (
                <Link to={myPost.path} className='col-12 col-lg-6 mb-5 nav-link'>
                  <div  key={myPost.id}>
                    
                    <img
                     style={{height: '50vh', width: '100%'}}
                      className='img-thumbnail rounded'
                      src={myPost.img}
                      alt=''
                    />
                    
                    <div>
                      <h6>{myPost.date}</h6>
                      <h3>{myPost.title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
