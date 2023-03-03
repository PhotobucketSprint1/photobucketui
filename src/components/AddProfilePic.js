import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import SuccessMsg from "../views/SuccessMsg";

function AddProfilePic(){

    const [ profile, setProfile ] = useState();
    const [ profileV, setProfileV ] = useState();
    const [ show, setShow ] = useState(true);

    const userid = sessionStorage.getItem("userid");

    function handleProfilePic(){
        if(profile == undefined){
            setProfileV("Please Select Image");
            return;
        }else{
            setProfileV("");
        }

        let formData = new FormData();
        formData.append("img", profile);
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };

        axios.post(`http://localhost:8080/user/${userid}/addProfilePic`,formData,config)
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
        setProfile(postImg);
      }else {
        setProfile(null);
        setProfileV('Please select a valid image file (JPEG, PNG, or GIF)');
        }
    }

    return(

        <div className="container">
            
            <SuccessMsg msg="Profile Picture Added" status={show} />

                <div className="form-group col-md-6">
                    <label >Choose Picture</label> 
                    <input type="file" className="form-control" accept="image/jpeg,image/png,image/gif" data-testid="profileTest" onChange={handleImg} />
                    <p style={{color:'red'}}>{profileV}</p>
                </div>
                <button type="submit" className="btn btn-primary" data-testid="saveBtnTest" onClick={handleProfilePic} >Change Picture</button> &nbsp;&nbsp;
                <Link to="/user/dashboard/userProfile" type="submit" className="btn btn-primary" >Back</Link>
        </div>
    )
}

export default AddProfilePic;