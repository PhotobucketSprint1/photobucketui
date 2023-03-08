import axios from "axios";
import { useEffect, useState } from "react";
import ErrorAlertMsg from "../views/ErrorAlertMsg";
import PostCard from "../views/PostCard";
import SuccessMsg from "../views/SuccessMsg";
import FeedCard from "./FeedCard";


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
            <h4 data-testid="viewAllPostTest" style={{marginLeft:"350px"}}>View All Post</h4>
            
            <div className="row">
            {
                posts.length > 0 ? posts.map((post)=>{
                    return post.blocked ? <p></p> : <div class="col-md-9"><FeedCard id={post.id} title={post.title} description={post.description} blocked={post.blocked} enableDelete={false} enableEditPic={false} /></div>
                }) : <ErrorAlertMsg msg="You have no post !" status={false} />
                
            }
            </div>
        </div>
    )
}

export default ViewAllUserPost;