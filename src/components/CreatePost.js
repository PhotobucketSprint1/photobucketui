import { useEffect, useState } from "react";
import axios from "axios";
import SuccessMsg from "../views/SuccessMsg";

function CreatePost(){

    const[message, setMessage] = useState();
    const [ title, setTitle ] = useState();
    const [ description, setDescription ] = useState();
    const [file, setFile] = useState();
    const[ success, setSuccess ] = useState(true);
    
    const[ post, setPost ] = useState({});
    const [imageSrc, setImageSrc] = useState(""); 


    const [ titleV, setTitleV ] = useState();
    const [ descriptionV, setDescriptionV ] = useState();
    const [ fileV, setFileV ] = useState();
    const userid = sessionStorage.getItem("userid");
    const [ isBlocked, setIsBlocked ] = useState(true);


    function savePost(eve){
        eve.preventDefault()
        
        if(title == undefined || title == " "){
          setTitleV("Please Enter Title");
          return;
        }else{
          setTitleV("");
        } 
        if(description == undefined || description == " "){
          setDescriptionV("Please Enter Description");
          return;
        }else{
          setDescriptionV("");
        }
        if(file == undefined){
          setFileV("Please Choose File");
          return;
        }else{
          setFileV("");
        }


        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("postImg", file);
        formData.append("user_post_id", userid);
       
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };
        
        axios.post("http://localhost:8080/user/createPost", formData, config)
          .then((res)=>{
            console.log(res);
            if(res.status == 200){
              setSuccess(false);
            }else if(res.data == "Admin blocked your profile"){
                setIsBlocked(false);
            }
            setMessage(res.data);
          })
          .catch((err)=>{
            console.log(err);
          });

    }


    const handlePostById = ()=>{
      axios.get("http://localhost:8080/user/getPost/4")
        .then((res)=>{
          console.log(res.data);
          setPost(res.data);
          setImageSrc(`data:image/jpeg;base64,${res.data.img}`);
        })
        .catch((err)=>{
          console.log(err);
        })
    }
    const handleDelete = ()=>{
      axios.delete("http://localhost:8080/user/deletePost/6")
        .then((res)=>{
          console.log(res.data);
          // setPost(res.data);
          // setImageSrc(`data:image/jpeg;base64,${res.data.img}`);
        })
        .catch((err)=>{
          console.log(err);
        })
    }


    function handleImg(e){
      const postImg = e.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (postImg && allowedTypes.includes(postImg.type)) {
          setFile(postImg);
      }else {
          setFile(null);
          setFileV('Please select a valid image file (JPEG, PNG, or GIF)');
          
        }
    }

    return (
       
        //     <button onClick={handlePostById}>Get Post by id 1</button>
        //      <p>{message}</p>
        //      <p>{post.title}</p>
        //      <p>{post.description}</p>
        //      <img src={imageSrc} alt="Post image" width="200px" height="200px" />
        //      <button onClick={handleDelete}>Delete Post</button>
        <div>
          
        <SuccessMsg msg="Posted" status={success} />
      
        <div className="container mt-3">
      <form action="" method="POST" encType="multipart/form-data">
      <div className="col-xs-3">
      <div className="form-group">
          <label >Title:</label><br/>
          <input type="text" data-testid="titleTest" className="form-control" id="title" name="title" required onChange={(e)=>{
                    setTitle(e.target.value);
                }} />
        </div>
        <p style={{color:'red'}}>{titleV}</p>
      </div>
        
        <div className="form-group">
          <label >Description:</label><br/>
          <textarea className="form-control" data-testid="descriptionTest" id="description" name="description" rows="3" required onChange={(e)=>{
                    setDescription(e.target.value);
                 }}></textarea>
        </div>
        <p style={{color:'red'}}>{descriptionV}</p>
        <div className="form-group">
          <label className="form-label">Image</label><br/>
          <input className="form-control" data-testid="imageTest" accept="image/jpeg,image/png,image/gif" type="file" id="formFile" onChange={handleImg} />
        </div> 
        <p style={{color:'red'}}>{fileV}</p>
        <button type="submit" className="btn btn-primary" data-testid="savePostBtn" onClick={savePost}>Post</button>
        <p hidden={isBlocked} style={{color:'red'}}>Admin Blocked Your Profile...</p>
      </form>
      </div>
      </div>
    )
}

export default CreatePost;