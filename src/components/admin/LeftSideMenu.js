import addPostIcon from "../../images/camera.png";
import man from "../../images/man.png";
import feed from "../../images/social-media.png";
import friends from "../../images/friends.png";
import logout from "../../images/logout.png";
import { Link, Outlet } from "react-router-dom";

function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/admin/dashboard/allUser" className="nav-link">
                <li class="list-group-item">
                    <img src={addPostIcon} width="25px" height="25px"/> &nbsp; View All User
                </li>
            </Link>
            {/* <Link to="/admin/dashboard/adminProfile" className="nav-link">
                <li class="list-group-item"><img src={man} width="25px" height="25px"/> &nbsp; Admin Profile</li>
            </Link>   */}
            <Link to="/admin/dashboard/allPosts" className="nav-link">
                <li class="list-group-item"><img src={feed} width="25px" height="25px"/> &nbsp; View All Post</li>
            </Link>
            {/* <Link to="/admin/dashboard/allComments" className="nav-link">
                <li class="list-group-item"><img src={feed} width="25px" height="25px"/> &nbsp; View All Comments</li>
            </Link> */}
            {/* <Link to="/user/dashboard/friends" className="nav-link">
                <li class="list-group-item"><img src={friends} width="25px" height="25px"/> &nbsp; Friends</li>
            </Link> */}
            <Link class="nav-link" to="/admin/dashboard/logout">
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