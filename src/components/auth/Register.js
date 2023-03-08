import { Label } from "@mui/icons-material";
import { Button, Input, Paper } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../Navigationbar";
import axios from "axios"
import SuccessMsg from "../../views/SuccessMsg";

function Register(){

    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();
    const [ email, setEmail ] = useState();
    const [file, setFile] = useState();
    

    const [ message, setMessage ] = useState();
    const [ userNameValidation, setUserNameValidation ] = useState();
    const [ passwordValidation, setPasswordValidation ] = useState();
    const [ emailValidation, setEmailValidation ] = useState();
    const [ fileV, setFileV ] = useState();
    const [ success, setSuccess ] = useState(true);

    function handleUserName(eve){
        setUserName(eve.target.value);
    }
    
    function handlePassword(eve){
        setPassword(eve.target.value);
    }
    
    function handleEmail(eve){
        setEmail(eve.target.value);
    }

    function handleButton(eve){
        eve.preventDefault()
        
        
        if(userName == undefined){
            setUserNameValidation("Please Enter Username");
            return;
        }else if(userName.length < 3){
            setUserNameValidation("User name should be greater than 3");
            return;
         }

        if(email == undefined){
            setEmailValidation("Please Enter Email");
            return;
        }

        if(password == undefined){
            setPasswordValidation("Please Enter Password");
            return;
        }else if(password.length < 3){
            setPasswordValidation("Password should be greater than 3");
            return;
        }
        var formData = new FormData();
        formData.append("userName", userName);
        formData.append("password", password);
        formData.append("emailId", email);
        formData.append("profilePicture",file);
        formData.append("role", "user");
        
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          };
            axios.post("http://localhost:8080/user/registerUser",formData,config).then((e)=>{
           
                console.log(e.data)
                setMessage("User Added Successfully");
                setSuccess(false);
                console.log(message);
            // }
        }).catch((e)=>{
            console.log(e.data)
            
         })
    }

    function handleImg(e){
        
        const postImg = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (postImg && allowedTypes.includes(postImg.type)) {
            setFile(postImg)
        }else {
            
            setFileV('Please select a valid image file (JPEG, PNG, or GIF)');
            
          }
      }



    return(
        <div>   
            <NavigationBar />
            <div style={{marginTop : "60px"}}>
                <SuccessMsg msg="User Added" status={success} />
            </div>
            <div className="container" style={{marginTop:"80px", marginLeft : "350px"}}>
            
      <form action="" method="POST" encType="multipart/form-data">
      <div className="col-xs-3">
      
      <div className="form-group col-md-6">
          <label >Username</label><br/>
          <input type="text" data-testid="usernameTest" className="form-control" id="title" name="title" required onChange={(e)=>{
                    setUserName(e.target.value);
                }} />
        </div>
        <p style={{color:'red'}} data-testid="invalidUsernameTest">{userNameValidation}</p>
      </div>
        
        <div className="form-group col-md-6">
          <label >Password</label><br/>
          <input type="password" className="form-control" data-testid="passwordTest" id="description" required onChange={(e)=>{
                    setPassword(e.target.value);
                 }} />
        </div>
        <p style={{color:'red'}}>{passwordValidation}</p>
        <div className="form-group col-md-6">
          <label >Email Id</label><br/>
          <input type="email" data-testid="emailTest" className="form-control" required onChange={(e)=>{
                    setEmail(e.target.value);
                }} />
        </div>
        <p style={{color:'red'}}>{emailValidation}</p>
        <div className="form-group col-md-6">
          <label className="form-label">Profile Picture</label><br/>
          <input className="form-control" data-testid="imageTest" accept="image/jpeg,image/png,image/gif" type="file" onChange={handleImg} />
        </div> 
        <p style={{color:'red'}}>{fileV}</p>
        <button type="submit" className="btn btn-primary" data-testid="registerBtnTest" onClick={handleButton}>Register</button>
        
      </form>
      </div>
        </div>
    )
}

export default Register;