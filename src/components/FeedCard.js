import { useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";
import SuccessMsg from "../views/SuccessMsg";
import { useNavigate } from "react-router-dom";

function FeedCard(props){

    const [ showImg, setImg ] = useState(true);
    const [imageSrc, setImageSrc] = useState("");
    const [ allComments, setAllComments ] = useState([]);
    const [ showComment, setShowComment ] = useState(true);
    const userid = sessionStorage.getItem("userid");
    const [ newComment, setNewComment ] = useState();
    const [ newCommentValidation, setNewCommentValidation ] = useState();
    const [ showAddMsg, setShowAddMsg ] = useState(true);
    const [ msg, setMsg ] = useState();

    const [ showLikeMsg, setShowLikeMsg ] = useState();
    const [ displayLike, setDisplayLike ] = useState(true);
    const [ showDeleteFlag, setShowDeleteFlag ] = useState(true);
    const [ show, setShow ] = useState(true);

    const [ likeCount, setLikeCount ] = useState([]);
    var navigate = useNavigate();
    

    function handleViewPostById(){
        let postid = props.id;          
        axios.get(`http://localhost:8080/user/getPostImage/${postid}`)
            .then((res)=>{
                console.log(res.data);
                setImageSrc(`data:image/jpeg;base64,${res.data.img}`);
                setImg(false);
            })
            .catch((err)=>{
                console.log(err);
            })
            setImg(true);
    }


    function viewAllComments(){
        setNewCommentValidation("");
        let postId = props.id;
        axios.get(`http://localhost:8080/user/getCommentsForPost/${postId}`)
        .then((res)=>{
            console.log(res.data);
            setAllComments(res.data);
            setShowComment(false);
            if(res.data.length == 0){
                setNewCommentValidation("No Comments For This Post");
                return;
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function addComment(){
        if(newComment == undefined ){
            setNewCommentValidation("Please Add Comment First");
            return;
        }
        if(newComment == " "){
            setNewCommentValidation("This is not valid comment");
            return;
        }
        if(newComment != undefined && newComment != " " ){
            let postId = props.id;
            axios.put(`http://localhost:8080/user/addComment/${postId}/${userid}`, { text : newComment })
            .then((res)=>{
                console.log(res.data);
                setMsg("Comment Added");
                setShowAddMsg(false);
                
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }


    function addLike(){
        let postId = props.id;
        axios.put(`http://localhost:8080/user/likePost/${postId}/${userid}`)
        .then((res)=>{
            console.log(res.data);
            setMsg("Like Added");
            setShowAddMsg(false);
        })
        .catch((err)=>{
            console.log(err);
            setMsg("You've Already Liked This Post");
            setShowAddMsg(false);
        })
    }

    function viewAllLikes(){
        let postId = props.id;
        axios.get(`http://localhost:8080/user/${postId}/getLikes`)
            .then((res)=>{
                console.log(res.data);
                setLikeCount(res.data);
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

    function editPostPic(e){
        sessionStorage.setItem("postid",props.id)
        navigate("/user/dashboard/editPostPicture")
    }


    return (
        <div>
            <SuccessMsg msg={msg} status={showAddMsg} />
            <div class="card text-center" style={{marginLeft : "40px"}}>
  <div class="card-header">
    Featured
  </div>
  <div class="card-body" style={{height:"300px"}}>
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <div hidden={showImg}>
        <img src={imageSrc} style={{width:"150px", height:"150px"}} />
    </div>

  </div>
  <div class="card-footer text-muted">
  <a style={{textDecoration:'none',  cursor:"pointer"}} class="link-secondary" onClick={handleViewPostById}>View Full Post</a> &nbsp;&nbsp;&nbsp;&nbsp;
  <a style={{textDecoration:'none', cursor:"pointer"}} class="link-secondary" onClick={viewAllComments}>View All Comment</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a style={{textDecoration:'none',  cursor:"pointer"}} class="link-secondary" onClick={addLike}>Like</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a style={{textDecoration:'none', cursor:"pointer"}} class="link-secondary" onClick={viewAllLikes}>{ likeCount.length == 0 ? "" : likeCount.length } Total Likes</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a hidden={props.enableDelete} style={{textDecoration:'none',  cursor:"pointer"}} class="link-secondary" onClick={showModal}>Delete This Post</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <a hidden={props.enableEditPic} style={{textDecoration:'none',  cursor:"pointer"}} class="link-secondary" onClick={editPostPic}>Edit Picture of Post</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="input-group mb-3">
  <input type="text" class="form-control" onChange={(e)=>{
    setNewComment(e.target.value);
  }} placeholder="Add Comment" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
  <div class="input-group-append">
    <button class="input-group-text" onClick={addComment} >Comment</button>
  </div> <br/><br/>
  
</div>
<p style={{color:'red'}}>{newCommentValidation}</p>

                <div className="container" hidden={show} >
                        <p>Confirm Delete ?</p>
                            <button className="btn btn-success">No</button> &nbsp; &nbsp;
                            <button className="btn btn-danger" data-testid="deleteBtnTest" onClick={handleDelete}>Yes</button>
                    </div>


<div hidden={showComment}>
        {
            allComments.map((comment)=>{
               return comment.blocked ? <p><span></span></p> : <p>" {comment.text} " - By {comment.username}</p>
            })
        }
  </div>
  </div>
</div>
        </div>
    )
}

export default FeedCard;