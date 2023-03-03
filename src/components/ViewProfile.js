import axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "../views/UserDetails";
import UserProfilePic from "../views/UserProfilePic";

function ViewProfile(){

    const [ user, setUser ] = useState({});
    const [ profilePic, setProfilePic ] = useState();
    const userid = sessionStorage.getItem("userid");
    const [ isBlocked, setIsBlocked ] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/viewprofile/${userid}`)
            .then((res)=>{
                console.log(res.data);
                if(res.data == "Admin blocked your profile"){
                    setIsBlocked(true);
                }
                setUser(res.data);
                setProfilePic(`data:image/jpeg;base64,${res.data.profilePic}`);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);

    return(
        <div>
            {
                isBlocked ? <p>:( SORRY Admin Blocked Your Profile</p> : <div>
                    <UserProfilePic profilePic = {profilePic}/>
                    <UserDetails username={user.userName} email={user.emailId} img={profilePic} />
                </div>
            }
            
            
        </div>
    )
}

export default ViewProfile;