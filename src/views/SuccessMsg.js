
function SuccessMsg(props){

    function refresh(){
        window.location.reload();
    }

    return (
        <div>
            <div hidden={props.status} className="alert alert-success alert-dismissible fade show" role="alert" data-testid="successMsg">
                <strong>{props.msg} !</strong> 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={refresh} ></button>
            </div>
    </div>
    )
}

export default SuccessMsg;