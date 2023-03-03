import PostCard from "../../views/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewAllPosts(){

    const [ posts, setPosts ] = useState([]);
    const [postId, setPostId] = useState('');
  const[message,setMessage]= useState();
//   const handlePostIdChange = (event) => {
//     setPostId(event.target.value);
//   };

    useEffect(()=>{
        axios.get("http://localhost:8080/user/getPostsByUser/2")
            .then((res)=>{
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);


    const handleBlockPost = (postId) => {

        axios.post("http://localhost:8080/admin/blockPost", { id: postId })
          .then(response => {
            console.log(response.data);
            setMessage("UnBlocked");
            // show success message to user
          })
          .catch(error => {
            console.error(error);
            // show error message to user
          });
      };

    return(<div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>
              <button className="btn btn-danger" onClick={()=>{
                        handleBlockPost(post.id)
                    }}>Block Post</button>
              <button className="btn btn-info">View</button>
            </td>
          </tr>
        ))}
  </tbody>
</table>


    </div>)

}

export default ViewAllPosts;