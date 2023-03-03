function UserCard(props){
    return (
        <div>
            <div>
                <div class="card" style={{backgroundColor:"#F0FFFC"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.userName}</h5>
                    <p class="card-text">{props.emailId}</p>
                    {/* <img hidden={hiddenImg} src={imageSrc} alt="Post image" width="200px" height="200px" /> */}
                    {/* <button class="btn btn-dark" onClick={handleViewPostById} >View Full Post</button> */}
                    {/* <button class="btn btn-danger" onClick={handleDelete} >Delete Post</button> */}
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserCard;