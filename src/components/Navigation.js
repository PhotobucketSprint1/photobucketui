import { Outlet } from "react-router-dom";
import HomeImg from "./HomeImg";
import NavigationBar from "./Navigationbar";




function Navigation(){


    return(
        <div>
            <NavigationBar />
            <HomeImg />
        </div>

    )
}

export default Navigation;