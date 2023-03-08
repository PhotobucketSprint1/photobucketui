import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import LikeButton from "./LikeButton";

import SuccessMsg from "./SuccessMsg";

function PostCard(props){

    const [imageSrc, setImageSrc] = useState("");
    const [ hiddenImg, setHiddenImg ] = useState(true);
    const [ show, setShow ] = useState(true);
    const [ showDeleteFlag, setShowDeleteFlag ] = useState(true);
    const[allcomments,setallcomments]=useState([]);
    const[alllikes,setalllikes]=useState([]);

    var navigate = useNavigate();

    function handleViewPostById(){
        let postid = props.id;          
        axios.get(`http://localhost:8080/user/getPostImage/${postid}`)
            .then((res)=>{
                console.log(res.data);
                setImageSrc(`data:image/jpeg;base64,${res.data.img}`);
                setHiddenImg(false);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    function handleDelete(){
        let postId = props.id;
        axios.delete(`http://localhost:8080/user/deletePost/${postId}`)
            .then((res)=>{
                console.log(res.data);
                setShowDeleteFlag(false);
                navigate("/user/dashboard/viewAllUserPost");
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    function showModal(){
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }


    function handlePostChangeBtn(e){
        sessionStorage.setItem("postid",props.id)
        navigate("/user/dashboard/editPostPicture")
    }
    function viewAllComments(){
        let postId = props.id;
        axios.get(`http://localhost:8080/user/getCommentsForPost/${postId}`)
        .then((res)=>{
         console.log(res.data);
         
         setallcomments(res.data)
       //  navigate("http://localhost:8080/user/dashboard/viewAllUserPost")
        })
        .catch((err)=>{
            console.log(err);

    })
}
    function viewAllLikes(){
        let postId=props.id;
        axios.get(`http://localhost:8080/user/${postId}/getLikes`)
        .then((res)=>{
        console.log(res.data);
        setalllikes(res.data)
    })
    .catch((err)=>{
        console.log(err);
})
}
    

    return(
        <div>
            <SuccessMsg msg="Post Deleted" status={showDeleteFlag}/>
            <div>

                <div className="card" style={{backgroundColor:"#F0FFFC"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <img hidden={hiddenImg} src={imageSrc} alt="Post image" width="200px" height="200px" />
                    <button className="btn btn-dark" onClick={handleViewPostById} >View Full Post</button>&nbsp; &nbsp;

                    <button className="btn btn-danger" onClick={showModal} >Delete Post</button><p></p> <br/>
                    <button className="btn btn-primary" onClick={handlePostChangeBtn} >Change Post Picture</button> <br/>
                    <LikeButton postId={props.id}/>
                    <CommentForm postId={props.id} />
                  <button className="btn btn-secondary" onClick={viewAllComments}>View Comments</button>
                  {/* <p>{allcomments.length}</p> */}
                  {
                    allcomments.map((comment)=>{
                        return <li>{comment.text} User :  {comment.username}</li>
                    })
                    
                  }
                  <button className="btn btn-secondary" onClick={viewAllLikes}>View Likes</button>.
                  <p>{alllikes.length}</p>
                  <div className="container" hidden={show} style={{marginLeft : "60px", marginTop :"10px"}} >
                        <p>Confirm Delete ?</p>
                            <button className="btn btn-success">No</button> &nbsp; &nbsp;
                            <button className="btn btn-danger" data-testid="deleteBtnTest" onClick={handleDelete}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PostCard;