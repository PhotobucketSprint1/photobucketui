import PostCard from "../../views/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewAllPosts(props){

    const [ posts, setPosts ] = useState([]);
    const [postId, setPostId] = useState('');
  const[message,setMessage]= useState();
  //const[allcomments,setallcomments]=useState([]);
  const[check,setCheck]=useState(true);
  var navigate = useNavigate();
//   const handlePostIdChange = (event) => {
//     setPostId(event.target.value);
//   };

    useEffect(()=>{
        axios.get("http://localhost:8080/admin/viewPostDetails")
            .then((res)=>{
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    function viewAllComments(postId){
    //   axios.get(`http://localhost:8080/user/getComments/${postId}`)
    //   .then((res)=>{
    //    console.log(res.data);
      //  if(res.data.length == 0){
      //   console.log("No comments for "+postId);
      //  }
       //setallcomments(res.data);
       //setCheck(false);
       navigate(`/admin/dashboard/allComments/${postId}`);
       
//       })
//       .catch((err)=>{
//           console.log(err);
//   })
}
    const handleBlockPost = (postId) => {

        axios.post("http://localhost:8080/admin/blockPost", { id: postId })
          .then(response => {
            console.log(response.data);
            setMessage("Post Blocked");
            // show success message to user
          })
          .catch(error => {
            console.error(error);
            // show error message to user
          });
      };
      // const handleBlockComment = (commentId) => {

      //   axios.post("http://localhost:8080/admin/blockComment", { id: commentId })
      //     .then(response => {
      //       console.log(response.data);
      //       setMessage("Comment Blocked");
      //       // show success message to user
      //     })
      //     .catch(error => {
      //       console.error(error);
      //       // show error message to user
      //     });
      // };
      const handleUnBlockPost = (postId) => {

        axios.post("http://localhost:8080/admin/unblockPost", { id: postId })
          .then(response => {
            console.log(response.data);
            setMessage("Post UnBlocked");
            // show success message to user
          })
          .catch(error => {
            console.error(error);
            // show error message to user
          });
      };
      // const handleUnBlockComment = (commentId) => {

      //   axios.post("http://localhost:8080/admin/unblockPost", { id: commentId })
      //     .then(response => {
      //       console.log(response.data);
      //       setMessage("comment UnBlocked");
      //       // show success message to user
      //     })
      //     .catch(error => {
      //       console.error(error);
      //       // show error message to user
      //     });
      // };

    return(<div>
         <p style={{backgroundColor:'lavender',fontSize:'30px'}} data-testid="msg">{message}</p>
         {/* <table class="table">
             <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Comments</th>
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
                      <td>
                        <button className="btn btn-danger" style={{backgroundColor:'lightcoral'}} onClick={()=>{
                              handleBlockComment(comment.id)}}>Block Comment</button>
                         <button className="btn btn-success" style={{backgroundColor:'mediumaquamarine'}} onClick={()=>{
                              handleUnBlockComment(comment.id)}}>UnBlock Comment</button>
                      </td>
                  </tr>))
                  
                  }
                            </tbody>
          </table> */}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">UserName</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>{post.username}</td>
            <td>
              <button className="btn btn-danger" style={{backgroundColor:'lightcoral'}} onClick={()=>{
                        handleBlockPost(post.id)
                    }}>Block Post</button>
                    <button className="btn btn-success" style={{backgroundColor:'mediumaquamarine'}} onClick={()=>{
                        handleUnBlockPost(post.id)
                        }}>UnBlock User</button>
                        <button className="btn btn-success" style={{backgroundColor:'olive'}} onClick={()=>{
                        viewAllComments(post.id)
                        }}>View Comments</button>
                      
              {/* <button className="btn btn-info">View</button> */}
            </td>
          </tr>
        ))}
  </tbody>
</table>


    </div>)

}

export default ViewAllPosts;