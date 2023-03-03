import { useState } from "react";
import { Link } from "react-router-dom";

function UserDetails(props){

    

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-3 "></div>
            <div className="col-md-2">
                <p>UserName</p>
                <p>Email Id</p> <br/><br/>
                <Link to="/user/dashboard/editProfile" className="btn btn-success">Edit Profile</Link>
            </div>
            <div className="col-md-3">
                <p>{props.username}</p>
                <p>{props.email}</p><br/><br/>
                <Link to="/user/dashboard/addProfilePic" className="btn btn-primary">Add/Change Profile Pic</Link>
            </div>
            </div>
        </div>
        
    )
}

export default UserDetails;