import pic from "../images/man.png"

function FriendCard(props){
    const userid = sessionStorage.getItem("userid");

    return(
        <div>
            {
                props.id == userid ? <></> : <div>
                <div className="card" style={{backgroundColor:"#F0FFFC"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.username}</h5>
                    <img src={pic} alt="Post image" width="150px" height="150px" />
                    <button className="btn btn-success" >Send Request</button>&nbsp; &nbsp;
                </div>
            </div>
        </div>
        }
            
</div>
    )
}
export default FriendCard;