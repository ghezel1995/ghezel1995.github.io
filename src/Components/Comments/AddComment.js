import React from 'react';

const AddComment = (props) => {
  return (
    <>
      <div className='container'>
        <ul class="list-group mt-5">
          {props.comments.map((cmd) => (
            <li className='list-group-item list-group-item-light mb-1 fs-5' key={cmd.id}>
              <span className='fw-bolder'>{cmd.name}</span> says: <span className='fw-semibold'>{cmd.comment}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddComment;
