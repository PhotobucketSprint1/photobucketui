import { useEffect } from "react";
import homeimg from "../images/homepage.jpg";

function HomeImg(){

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    return(
        <div>
            <img src={homeimg} className="img-fluid" />
        </div>
    )
}

export default HomeImg;