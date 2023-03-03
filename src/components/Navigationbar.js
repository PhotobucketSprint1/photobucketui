import HomeImg from "./HomeImg";

function NavigationBar(){
    return(
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
            <a class="navbar-brand" href="/home">PhotoBucket</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="/home" aria-current="page" >Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/register" tabindex="-1" aria-disabled="true">Sign Up</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/login" tabindex="-1" aria-disabled="true">Admin Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login" tabindex="-1" aria-disabled="true">Login</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
      </div>

    )
}

export default NavigationBar;