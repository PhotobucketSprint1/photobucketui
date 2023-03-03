import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AfterNavbar from "./AfterNavBar";
import LeftSideMenu from "./LeftSideMenu";

function AdminDashboard(){   


    var navigate = useNavigate();

    useEffect(()=>{
        const isLoggedIn = sessionStorage.getItem("loggedIn");

        if(isLoggedIn){

        }else{
            navigate("/admin/login");
        }
    }, []);


    return(
    <div>
        <div className="container">
            <AfterNavbar />
        </div>
        
        <div className="row" style={{marginTop:"60px"}}>
            <LeftSideMenu />
            <div className="col-md-10">
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default AdminDashboard;