import { Label } from "@mui/icons-material";
import { Button, Input, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../Navigationbar";
import axios from "axios";



function AdminLogin(){


    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();

    const [ message, setMessage ] = useState();
    const [ userNameValidation, setUserNameValidation ] = useState();
    const [ passwordValidation, setPasswordValidation ] = useState();
    var navigate = useNavigate();

    function handleUserName(eve){
        setUserName(eve.target.value);
    }
    
    function handlePassword(eve){
        setPassword(eve.target.value);
    }


    function handleButton(){
        
        if(userName == undefined){
            setUserNameValidation("Please Enter Username");
            return;
        }else if(userName.length < 3){
            setUserNameValidation("User name should be greater than 3");
            return;
         }
        if(password == undefined){
            setPasswordValidation("Please Enter Password");
            return;
        }else if(password.length < 3){
            setPasswordValidation("Password should be greater than 3");
            return;
        }
        
        var admin={ 
            username:userName,
            password:password
        }
        let headers={
            'Content-Type':'application/json'
        }
        axios.post("http://localhost:8080/admin/login",admin,{headers}).then((e)=>{
            if(e.status == 200)
            {
                sessionStorage.setItem("loggedIn", true);
                    let loggedInUser = {
                        username : userName
                    }
                
                sessionStorage.setItem("admin", JSON.stringify(loggedInUser));
                navigate("/admin/dashboard");
                console.log(e.data)
            }
            console.log(e);
        }).catch((e)=>{
            console.log(e)
            setMessage("Invalid Username & Password")
         })
        
    }


    return (
        <div>
            <NavigationBar />

<Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
    <div style={{marginLeft : "150px"}}>
    <h3 style={{marginLeft : "35px"}} >Admin Login</h3> <br/>
User Name   <br/>
<Input type="text" required onChange={handleUserName}/> <br/>
<p style={{color:'red'}}>{userNameValidation}</p>
Password  <br/>
<Input type="password" required onChange={handlePassword}/> <br/> <br/>
<p style={{color:'red'}}>{passwordValidation}</p>
<Button style={{marginLeft:"50px"}} variant="contained" onClick={handleButton} >Login</Button> <br/><br/>
{/* <Link to="/register" style={{textDecoration:"none"}}> <p>Don't Have Account ?</p> </Link> */}
<p style={{color:"red"}}>{message}</p><br/><br/>
</div>
</Paper>
        </div>
    )
}

export default AdminLogin;