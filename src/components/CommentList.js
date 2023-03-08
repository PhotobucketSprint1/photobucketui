import { useEffect,useState } from "react";

function CommentList(props){
    const [ allComments, setAllComments ] = useState([]);
    
    return(
        <div hidden={props.status}>
            {
                allComments.map((comment)=>{
                    return <li>{comment.text}{comment.username}</li>
                })
            }
        </div>
    )
}

export default CommentList;