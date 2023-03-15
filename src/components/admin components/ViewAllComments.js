import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";




function ViewAllComments(){
    const [allcomments, setallcomments] = useState([]);
  const { postid } = useParams();
  const[message,setMessage]=useState();
  const[check,setCheck]=useState(true);

  useEffect(()=>{
    axios.get(`http://localhost:8080/user/getCommentsForPost/${postid}`)
      .then((res)=>{
       console.log(res.data);
       setallcomments(res.data);
       setCheck(false);
      })
      .catch((err)=>{
          console.log(err);
  })

  },[]);

  
  const handleBlockComment = (commentId) => {

    axios.post("http://localhost:8080/admin/blockComment", { id: commentId })
      .then(response => {
        console.log(response.data);
        setMessage("Comment Blocked");
        // show success message to user
      })
      .catch(error => {
        console.error(error);
        // show error message to user
      });
  };
  const handleUnBlockComment = (commentId) => {

    axios.post("http://localhost:8080/admin/unblockComment", { id: commentId })
      .then(response => {
        console.log(response.data);
        setMessage("comment UnBlocked");
        // show success message to user
      })
      .catch(error => {
        console.error(error);
        // show error message to user
      });
  };

    return(
        <div>
             <p style={{backgroundColor:'lavender',fontSize:'30px'}} data-testid="msg">{message}</p>
            <table class="table">
             <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Comments</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Actions</th>
                  </tr>
               </thead>
               <tbody>
                {
                  allcomments.length <= 0 ? <p hidden={check} >No Comments for this post</p> : 
                allcomments.map((comment)=>(
                  <tr key={comment.id}>
                      <td>{comment.id}</td>
                      <td>{comment.text}</td>
                      <td>{comment.username}</td>
                      {/* <td>{comment.user!=undefined?comment.user.user_id:" "}</td> */}
                      <td>
                        <button className="btn btn-danger" style={{backgroundColor:'lightcoral'}} onClick={()=>{
                              handleBlockComment(comment.id)}}>Block Comment</button>
                         <button className="btn btn-success" style={{backgroundColor:'mediumaquamarine'}} onClick={()=>{
                              handleUnBlockComment(comment.id)}}>UnBlock Comment</button>
                      </td>
                  </tr>))
                  
                  }
                            </tbody>
          </table>
      </div>
    )
}

export default ViewAllComments;