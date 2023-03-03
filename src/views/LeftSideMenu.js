import addPostIcon from "../images/camera.png";
import man from "../images/man.png";
import feed from "../images/social-media.png";
import friends from "../images/friends.png";
import logout from "../images/logout.png";
import viewPost from "../images/viewpost.png";

import { Link, Outlet } from "react-router-dom";

function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/user/dashboard/createPost" className="nav-link">
                <li class="list-group-item">
                    <img src={addPostIcon} width="25px" height="25px"/> &nbsp; Create Post 
                </li>
            </Link>
            <Link to="/user/dashboard/userProfile" className="nav-link">
                <li class="list-group-item"><img src={man} width="25px" height="25px"/> &nbsp; User Profile</li>
            </Link>  
            <Link to="/user/dashboard/feed" className="nav-link">
                <li class="list-group-item"><img src={feed} width="25px" height="25px"/> &nbsp; Feed</li>
            </Link>
            <Link to="/user/dashboard/friends" className="nav-link">
                <li class="list-group-item"><img src={friends} width="25px" height="25px"/> &nbsp; Friends</li>
            </Link>
            <Link to="/user/dashboard/viewAllUserPost" className="nav-link">
                <li class="list-group-item"><img src={viewPost} width="25px" height="25px"/> &nbsp; View All Post</li>
            </Link>
            <Link class="nav-link" to="/user/dashboard/logout">
                <li class="list-group-item"><img src={logout} width="25px" height="25px"/> &nbsp; Logout</li>
            </Link>
            </ul>
            <div>
            {/* /user/dashboard/createPost */}
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default LeftSideMenu;