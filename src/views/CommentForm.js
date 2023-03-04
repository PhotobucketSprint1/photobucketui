import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { height } from '@mui/system';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const[commentValid,setCommentValid]= useState(false);
  const userId = sessionStorage.getItem("userid")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(commentText==undefined){
      console.log("comment cannot be empty")
      return;
    }else if(commentValid==false){
      alert("Please enter valid message");
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8080/user/addComment/${postId}/${userId}`, {
          text: commentText
         
      });
      
      console.log(response.data);
      alert("Your comment is saved");
    } catch (error) {
      console.error(error);
    }
  };
  const validateComment=()=>{
    if(commentText.trim().length>=1){
      setCommentValid(true);
    }else{
      setCommentValid(false);
    }
  };
  useEffect(()=>{
    validateComment();
  },[commentText]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Enter your comment here..."
        required
        style={{height:"100px",width:"100%",padding:"10px",border:"1px solid gray"}}
      />
        <button className="btn btn-dark" data-testid="submit"  onClick={handleSubmit}>Comment</button>
     
    </form>
  );
};

export default CommentForm;