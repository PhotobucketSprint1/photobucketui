import axios from "axios";
import { useEffect, useState } from "react";
import SuccessMsg from "../views/SuccessMsg";

function ViewPendingRequest(){

    const userid = sessionStorage.getItem("userid");
    const [ pendingReq, setPendingReq ] = useState([]);
    const [ show, setShow ] = useState(true);
    const [ msg, setMsg ] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/pendingRequest/${userid}`)
            .then((res)=>{
                console.log(res.data);
                setPendingReq(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    function acceptRequest(senderId){
        axios.post(`http://localhost:8080/user/acceptFriendRequest/${senderId}/${userid}`)
        .then((res)=>{
            console.log(res);
            setShow(false);
            setMsg("Friend Request Accepted")

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function sendFriendRequest(recieverId){
        axios.post(`http://localhost:8080/user/${userid}/sendFriendRequest/${recieverId}`)
            .then((res)=>{
                console.log(res);
                setShow(false);
                setMsg("Friend Request Sent");
            })
            .catch((err)=>{
                console.log(err);
                setMsg("Request Already Sent");
            })
    }

    return(
        <div>
            <h3 style={{marginLeft : "-140px", textAlign:"center"}}>View All Pending Request</h3>
            <SuccessMsg msg={msg} status={show} />
            {
                pendingReq.length == 0 ? <p style={{marginLeft:'50px'}}>No pending request</p> : pendingReq.map((req)=>{
                    return <ul className="list-group col-md-5" style={{marginLeft : "180px", textAlign:"center"}}><br/><li className="list-group-item list-group-item-info" style={{color:'black'}}>{req.sender.userName.toUpperCase()} <br/> <button className="btn btn-success" onClick={()=>{acceptRequest(req.sender.id)}} >Accept Request</button> <button className="btn btn-danger" onClick={()=>{sendFriendRequest(req.sender.id)}} >Send Request</button></li></ul>
                })
            }
            
        </div>
    )
}
{/* <button className="btn btn-success" onClick={()=>{acceptRequest(req.sender.id)}} >Accept Request</button> <button className="btn btn-danger" onClick={()=>{sendFriendRequest(req.sender.id)}} >Send Request</button> */}
{/* <li>{req.sender.userName.toUpperCase()} <button className="btn btn-success" onClick={()=>{acceptRequest(req.sender.id)}} >Accept Request</button> <button className="btn btn-danger" onClick={()=>{sendFriendRequest(req.sender.id)}} >Send Request</button> </li> */}
export default ViewPendingRequest;