import { useEffect } from "react";

function Logout(){

    useEffect(()=>{
        sessionStorage.clear();
        window.location.href = "/home";
    },[]);

    return(
        <></>
    )
}

export default Logout;