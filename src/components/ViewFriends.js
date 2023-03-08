import axios from "axios";
import { useEffect, useState } from "react";
import SuccessMsg from "../views/SuccessMsg";

function ViewFriends(){

    const userid = sessionStorage.getItem("userid");
    const [ friends, setFriends ] = useState([]);
    
    // const [ show, setShow ] = useState(true);
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/getFriends/${userid}`)
            .then((res)=>{
                console.log(res.data);
                setFriends(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    return (<div>

        <h3 style={{marginLeft:"270px"}}>View All Friends</h3>
        <div style={{marginTop:"50px"}}>
            {
                friends.length == 0 ? <p style={{marginLeft:"300px"}}>You've No Friends !</p> : friends.map((friend)=>{
                    console.log(friend)
                    return <ul className="list-group col-md-5" style={{marginLeft : "180px", textAlign:"center"}}><br/><li className="list-group-item list-group-item-info" style={{color:'black'}}>{friend.userName.toUpperCase()} &nbsp; &nbsp; {friend.emailId} </li></ul>
                })
            }
        </div>
    </div>)
}

export default ViewFriends;