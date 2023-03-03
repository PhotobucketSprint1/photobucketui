import profile from "../images/man.png";

function UserProfilePic(props){
    
    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3">
                <img src={props.profilePic} width="120px" height="120px" />
            </div>
        </div>
    )
}

export default UserProfilePic;