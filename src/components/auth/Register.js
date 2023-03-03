import { Label } from "@mui/icons-material";
import { Button, Input, Paper } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../Navigationbar";

function Register(){

    const [ userName, setUserName ] = useState();
    const [ password, setPassword ] = useState();
    const [ email, setEmail ] = useState();
    const [ message, setMessage ] = useState();
    const [ userNameValidation, setUserNameValidation ] = useState();
    const [ passwordValidation, setPasswordValidation ] = useState();
    const [ emailValidation, setEmailValidation ] = useState();

    function handleUserName(eve){
        setUserName(eve.target.value);
    }
    
    function handlePassword(eve){
        setPassword(eve.target.value);
    }
    
    function handleEmail(eve){
        setEmail(eve.target.value);
    }

    function handleButton(){
        
        if(userName == undefined){
            setUserNameValidation("Please Enter Username");
        }else if(userName.length < 3){
            setUserNameValidation("User name should be greater than 3");
         }

        if(email == undefined){
            setEmailValidation("Please Enter Email");
        }

        if(password == undefined){
            setPasswordValidation("Please Enter Password");
        }else if(password.length < 3){
            setPasswordValidation("Password should be greater than 3");
        }
    }



    return(
        <div>
            <NavigationBar />
        <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
            <div style={{marginLeft : "160px"}}>
            <h3 style={{marginLeft : "25px"}} >User Sign Up</h3> <br/>
        User Name   <br/>
        <Input type="text" required onChange={handleUserName}/> <br/>
        <p style={{color:'red'}}>{userNameValidation}</p>
        Password  <br/>
        <Input type="password" required onChange={handlePassword}/> <br/> <br/>
        <p style={{color:'red'}}>{passwordValidation}</p>

        Email Id   <br/>
        <Input type="email" required onChange={handleEmail}/> <br/>
        <p style={{color:'red'}}>{emailValidation}</p>

        <Button style={{marginLeft:"50px"}} variant="contained" onClick={handleButton} >Register</Button> <br/><br/>
        <Link to="/login" style={{textDecoration:"none"}}> <p>Already Have Account ?</p></Link>
        <p style={{marginLeft:"50px"}}>{message}</p><br/><br/>
        </div>
        </Paper>
    </div>
    )
}

export default Register;