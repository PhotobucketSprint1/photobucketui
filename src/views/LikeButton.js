
import React, { useState } from 'react';
 import axios from 'axios'; 
 function LikeButton(props) { 
  const [liked, setLiked] =
   useState(false);
   const userid = sessionStorage.getItem("userid");
    const handleLike = () =>
     {
       axios.put(`http://localhost:8080/user/likePost/${props.postId}/${userid}`)
       .then(response => { 
        setLiked(true);
       })
       .catch(error => console.log(error)); 
      }
       return (
      <button  className="btn btn-danger"  onClick={handleLike} 
      disabled={liked}>
        {liked ? 'Liked!' : 'Like'}
        </button>
        );
       }
        export default LikeButton;