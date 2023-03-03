import PostCard from "../../views/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";

function ViewAllPosts(){

    const [ posts, setPosts ] = useState([]);

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
              <button className="btn btn-danger">Block Post</button>
              <button className="btn btn-info">View</button>
            </td>
          </tr>
        ))}
  </tbody>
</table>


    </div>)

}

export default ViewAllPosts;