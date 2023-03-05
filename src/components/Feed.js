import axios from "axios";
import { useEffect, useState } from "react";
import FriendCard from "../views/FriendCard";
import PostCard from "../views/PostCard";

function Feed(){

    const userid = sessionStorage.getItem("userid");
    const [ friendPosts, setFriendPosts ] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/following-users?userId=4`)
            .then((res)=>{
                console.log(res.data);
                setFriendPosts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    return(<div>
        <h4>User can see All posts</h4>
        {  
            friendPosts.map((friend)=>{
                return <PostCard id={friend.id} title={friend.title} description={friend.description} />
            })
        }
    </div>)
}

export default Feed;