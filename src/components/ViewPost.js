import axios from "axios";
import { useState } from "react";

function ViewPost(){

    const [postId, setPostId] = useState();
    const [post, setPost] = useState([]);
    const [resMsg, setResMsg] = useState();

    function searchPostById(eve){   
        axios.get(`http://localhost:8080/user/getPost/${postId}`)
            .then((res)=>{
                console.log(res.data.title);
                setPost(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }


    function deletePostById(){

        axios.delete(`http://localhost:8080/user/deletePost/${postId}`)
        .then((res)=>{
            console.log(res.data);
            setResMsg(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            Enter Post id : <input type="number" onChange={(e)=>{
                setPostId(e.target.value);
            }} /> <br/>
            <button onClick={searchPostById}>Search</button>
            <button onClick={deletePostById}>Delete Post</button>
            <div>
               {resMsg}
            </div>
            
        </div>
    )
}

export default ViewPost;