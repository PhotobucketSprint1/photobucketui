
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessMsg from "../views/SuccessMsg";

function EditPostPicture(){

    const [ postPic, setPostPic ] = useState();
    const [ postPicV, setPostPicV ] = useState();
    const [ show, setShow ] = useState(true);

    const postid = sessionStorage.getItem("postid");

    function handlePostPic(){
        if(postPic == undefined){
            setPostPicV("Please Select Image");
            return;
        }else{
            setPostPicV("");
        }

        let formData = new FormData();
        formData.append("changeImg", postPic);
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };

        axios.put(`http://localhost:8080/user/changePostPicture/${postid}`,formData,config)
          .then((res)=>{
            console.log(res.data);
            if(res.status = 200){
                setShow(false);
            }
          })
          .catch((err)=>{
            console.log(err);
          })

    }

    function handleImg(e){
        const postImg = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (postImg && allowedTypes.includes(postImg.type)) {
            setPostPic(postImg);
        }else {
            setPostPic(null);
            setPostPicV('Please select a valid image file (JPEG, PNG, or GIF)');
          }
      }


    return(
        <div>
            <div className="container">
            
            <SuccessMsg msg="Post Picture Updated" status={show} />

                <div className="form-group col-md-6">
                    <label>Choose Picture</label> 
                    <input type="file" className="form-control" accept="image/jpeg,image/png,image/gif" data-testid="postPicTest" onChange={handleImg} />
                    <p style={{color:'red'}} data-testid="invalidImage" >{postPicV}</p>
                </div>
                <button type="submit" className="btn btn-success" data-testid="changeBtnTest" onClick={handlePostPic} >Change Post Picture</button> &nbsp;&nbsp;
                <Link to="/user/dashboard/viewAllUserPost" type="submit" className="btn btn-primary" >Back</Link>
        </div>
        </div>
    )
}

export default EditPostPicture;