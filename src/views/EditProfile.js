import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuccessMsg from "./SuccessMsg";

function EditProfile(props){


    const[ username, setUserName ] = useState();
    const[ email, setEmail ] = useState();
    const[ password, setPassword ] = useState();

    const[ usernameV, setUserNameV ] = useState();
    const[ emailV, setEmailV ] = useState();
    const[ passwordV, setPasswordV ] = useState();

    const[ show, setShow ] = useState(true);

    const[ user, setUser ] = useState({});
    
    const userid = sessionStorage.getItem("userid");

    useEffect(()=>{
        axios.get(`http://localhost:8080/user/viewprofile/${userid}`)
            .then((res)=>{
                console.log(res.data);
                setUser(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);


    function saveProfile(){

        if(username == undefined){
            setUserNameV("Please enter username");
            return;
        }else{
            setUserNameV("");
        }
        if(email == undefined){
            setEmailV("Please enter email");
            return;
        }else{
            setEmailV("");
        }
       

        if(username != undefined && email != undefined){
            let userDetails = {
                emailId : email,
                userName : username
            }
            console.log("SD");
    
            // use context api to take id
            axios.put(`http://localhost:8080/user/editprofile/${userid}`, userDetails)
                .then((res)=>{
                    console.log(res.data);
                    setShow(false);
                })
                .catch((err)=>{
                    console.log(err);
            })
        }
    }
    return(
        <div>
            <SuccessMsg msg="Profile Updated" status={show} />
            <div style={{marginLeft:"200px"}}>
            <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" data-testid="usernameTest" onChange={(e)=>{
                    setUserName(e.target.value)
                }} />
                <p style={{color:'red'}} data-testid="invalidUsernameTest" >{usernameV}</p>
            </div>
            <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" data-testid="emailTest" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <p style={{color:'red'}}>{emailV}</p>
            </div>
            <br/>
            <button className="btn btn-primary" data-testid="editBtnTest"  onClick={saveProfile}>Save</button> &nbsp;&nbsp;
            <Link to="/user/dashboard/userProfile" type="submit" className="btn btn-primary" >Back</Link>
            </div>
        </div>
    )
}

export default EditProfile;