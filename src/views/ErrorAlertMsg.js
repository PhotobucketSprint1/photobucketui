function ErrorAlertMsg(props){
    return(<div>
            <div hidden={props.status} class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{props.msg}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
            </div>  
    </div>)
}

export default ErrorAlertMsg;