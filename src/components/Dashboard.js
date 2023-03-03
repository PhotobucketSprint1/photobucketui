import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AfterNavbar from "../views/AfterNavbar";
import LeftSideMenu from "../views/LeftSideMenu";

import NavigationBar from "./Navigationbar";

function Dashboard(){   


    const [ userName, setUserName ] = useState();
    const [ userid, setUserid ] = useState();
    var navigate = useNavigate();


    useEffect(()=>{
        const isLoggedIn = sessionStorage.getItem("loggedIn");
        const username = sessionStorage.getItem("user");
        const parsedUsername = username==null ? "" : JSON.parse(username).username;
        if(username == null){
            navigate("/login");
        }
        
        if(isLoggedIn){
            axios.get(`http://localhost:8080/user/getUserByUsername/${parsedUsername}`)
                .then((res)=>{
                    setUserid(res.data);
                    console.log(res.data);
                    sessionStorage.setItem("userid", res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
                
        }else{
            // alert("Login first");
            navigate("/login");
        }
    }, []);
    

    return(
        
    <div>
        <div className="container">
            <AfterNavbar />
        </div>
        
        <div className="row" style={{marginTop:"60px"}}>
            <LeftSideMenu />
            <div className="col-md-10" >
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default Dashboard;