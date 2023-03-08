import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import SuccessMsg from "../../views/SuccessMsg";


function AdminSignup(){

    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();
    const [ email, setEmail ] = useState();

    

    const [ message, setMessage ] = useState();
    const [ userNameValidation, setUserNameValidation ] = useState();
    const [ passwordValidation, setPasswordValidation ] = useState();
    const [ emailValidation, setEmailValidation ] = useState();

    const [ success, setSuccess ] = useState(true);

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

        var admin = {
            username : userName,
            email_id : email,
            password : password
        }
        
            axios.post("http://localhost:8080/admin/registerAdmin",admin).then((e)=>{
                console.log(e.data)
                setMessage("Admin Added Successfully");
                setSuccess(false);
                console.log(message);
            // }
        }).catch((e)=>{
            console.log(e.data)
            
         })
    }
    

    return(
        <div>   
        {/* <NavigationBar /> */}
        <div style={{marginTop : "60px"}}>
            <SuccessMsg msg="Admin Added" status={success} />
            <h4 style={{marginLeft: "400px"}}>Admin Sign Up</h4>
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
      <label>Email Id</label><br/>
      <input type="email" data-testid="emailTest" className="form-control" required onChange={(e)=>{
                setEmail(e.target.value);
            }} />
    </div>
    <p style={{color:'red'}}>{emailValidation}</p>
    <button type="submit" className="btn btn-primary" data-testid="registerBtnTest" onClick={handleButton}>Register</button>
    
  </form>
  </div>
    </div>
    )
}

export default AdminSignup;