import axios from "axios";
import { useEffect, useState } from "react";
import FriendCard from "../views/FriendCard";
import PostCard from "../views/PostCard";
import FeedCard from "./FeedCard";

function Feed(){

    const userid = sessionStorage.getItem("userid");
    const [ friendPosts, setFriendPosts ] = useState([]);
    const [ posts, setPosts ] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/friendsPosts/${userid}`)
            .then((res)=>{
                console.log(res.data);
                setFriendPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    return(<div>
        <h4 style={{marginLeft:"450px"}}>Feed</h4> <br />
        {  
            friendPosts.map((friend)=>{
                return friend.map((fr)=>{
                    console.log(fr);
                    return fr.blocked ? <p></p> : <div style={{marginLeft : "150px"}} class="col-md-8"><FeedCard id={fr.id} title={fr.title} description={fr.description} blocked={fr.blocked} enableDelete={true} enableEditPic={true} /><br/></div> 
                })
            })
        }

    </div>)
}

export default Feed;