import axios from "axios";
import { useEffect, useState } from "react";
import ErrorAlertMsg from "../views/ErrorAlertMsg";
import FriendCard from "../views/FriendCard";


function Friends(){

    const [ users, setUsers ] = useState([]);
    const [ images, setImages ] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/allUser`)
            .then((res)=>{
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

        axios.get(`http://localhost:8080/admin/allUserImages`)
            .then((res)=>{
                console.log(res.data);
                setImages(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    },[]);

    return (
        <div className="container">
            
            <div className="row">
                
            {
                users.length > 0 ? users.map((user)=>{
                    return  <div class="col-md-4"><FriendCard id={user.id} username={user.userName} /></div>
                }) : <ErrorAlertMsg msg="You have no Friends !" status={false} />
                
            }
            </div>
        </div>
    )
}

export default Friends;