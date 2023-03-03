import axios from "axios";
import { useEffect, useState } from "react";
import ErrorAlertMsg from "../views/ErrorAlertMsg";
import PostCard from "../views/PostCard";
import SuccessMsg from "../views/SuccessMsg";


function ViewAllUserPost(){

    const [ posts, setPosts ] = useState([]);
    const userid = sessionStorage.getItem("userid");

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/getPostsByUser/${userid}`)
            .then((res)=>{
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    return(
        <div className="container">
            
            <div className="row">
            {
                posts.length > 0 ? posts.map((post)=>{
                    return <div class="col-md-4"><PostCard id={post.id} title={post.title} description={post.description} /></div>
                }) : <ErrorAlertMsg msg="You have no post !" status={false} />
                
            }
            </div>
        </div>
    )
}

export default ViewAllUserPost;