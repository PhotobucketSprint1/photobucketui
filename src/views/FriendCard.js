import axios from "axios";
import { useState } from "react";
import pic from "../images/man.png"
import SuccessMsg from "./SuccessMsg";

function FriendCard(props){
    const userid = sessionStorage.getItem("userid");
    const [ show, setShow ] = useState(true);
    const [ msg, setMsg ] = useState();

    function sendFriendRequest(recieverId){
        axios.post(`http://localhost:8080/user/${userid}/sendFriendRequest/${recieverId}`)
            .then((res)=>{
                console.log(res);
                setShow(false);
                setMsg("Friend Request Sent");
            })
            .catch((err)=>{
                console.log(err);
                setShow(false);
                setMsg("Friend Request Already Sent");
            })
    }

    return(
        <div>
            <SuccessMsg msg={msg} status={show} />
            {
                props.id == userid ? <></> : <div>
                <div className="card" style={{backgroundColor:"#F0FFFC"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.username}</h5>
                    <img src={pic} alt="Post image" width="150px" height="150px" />
                    <button className="btn btn-success" onClick={()=>{
                        sendFriendRequest(props.id)
                    }} >Send Request</button>&nbsp; &nbsp;
                </div>
            </div>
        </div>
        }
            
</div>
    )
}
export default FriendCard;