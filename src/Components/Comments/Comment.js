import React, { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal';

const Comment = (props) => {
  const nameInputRef = useRef();
  const commentTextRef = useRef();

  const [error, setError] = useState();

  const addCommentHandler = (event) => {
    event.preventDefault();
    const enterInName = nameInputRef.current.value;
    const enterInCmt = commentTextRef.current.value;
    if (enterInName.trim().length === 0 || enterInCmt.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'please enter a your name and message!'
      });
      return;
    }
    props.onAddComment(enterInName, enterInCmt);
    nameInputRef.current.value = '';
    commentTextRef.current.value= ''
  };


  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <div className='container'>
        <form onSubmit={addCommentHandler} className='row g-3'>
          <div className='col'>
            <input
              id='name'
              class='form-control'
              placeholder='Name'
              aria-label='Name'
              type='text'
              ref={nameInputRef}
            />
          </div>
          <div class='form-floating'>
            <textarea
              class='form-control'
              placeholder='Leave a comment here'
              id='commentTextarea'
              style={{ height: '100px' }}
              ref={commentTextRef}
            ></textarea>
          </div>
          <div className='col-12'>
            <button
              type='submit'
              className='btn btn-outline-secondary mt-4 text-center'
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comment;
