import React, {useState} from 'react'
import Comment from '../Comments/Comment';
import AddComment from '../Comments/AddComment';

export default function CommentBody() {
    const [cmdList, setCmdList] = useState([]);

const addCommentsHandler = (uName, uCmd) => {
  setCmdList((prevCmdList) => {
    return [...prevCmdList, {name: uName, comment: uCmd, id: Math.random().toString()}]
  });
}
return (
  <>
    <div className='container-fluid mt-5'>
    <p>Tell me about your opinion</p>
      <Comment onAddComment={addCommentsHandler}/>
      <AddComment comments={cmdList} />
    </div>
  </>
);
}
