import axios from "axios";
import { useEffect, useState } from "react";
import ErrorAlertMsg from "../../views/ErrorAlertMsg";
import SuccessMsg from "../../views/SuccessMsg";
import UserCard from "./UserCard";


function ViewAllUser(){

    const [ users, setUsers ] = useState([]);
    const [userId, setUserId] = useState('');
  const[message,setMessage]= useState();
  const [ show, setShow ] = useState(true);
  const [ toogleBtn, setToggleBtn ] = useState(false);

  const [ changeColor, setChangeColor ] = useState(false);

  const [ popupMsg, setPopupMsg ] = useState("");

  //const [useridvalidation,setUseridvalidation]= useState();
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
    console.log(userId)
  };
    

    useEffect(()=>{
        axios.get("http://localhost:8080/admin/allUser")
            .then((res)=>{
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);


    const handleSubmit = (userId) => {
        console.log(userId);
        axios.post("http://localhost:8080/admin/blockUser", { id: userId })
          .then(response => {
            console.log(response.data);
            setMessage("Blocked");
            setPopupMsg("User Blocked");
            setChangeColor(true);
            setShow(false);
            

            const updatedUsers = users.map(user => {
                if (user.id === userId) {
                  return {
                    ...user,
                    isBlocked: true
                  };
                }
                return user;
              });
              setUsers(updatedUsers);

            // setToggleBtn(true)
            // show success message to user
          })
          .catch(error => {
            console.error(error);
            // show error message to user
          });
          setShow(true);
      };

      const handleUnblockUser = (userId) => {
        axios.post("http://localhost:8080/admin/unblockUser", { id: userId })
          .then(response => {
            console.log(response.data);
            setPopupMsg("User UnBlocked");
            setShow(false);
            setMessage("UnBlocked");


            const updatedUsers = users.map(user => {
                if (user.id === userId) {
                  return {
                    ...user,
                    isBlocked: false
                  };
                }
                return user;
              });
              setUsers(updatedUsers);
            


            // show success message to user
          })
          .catch(error => {
            console.error(error);
            // show error message to user
          });
      };


    return(<div>
       

        <ErrorAlertMsg msg="User Blocked" status={show} />
        {/* <SuccessMsg msg="User Unblocked" status={} /> */}

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Username</th>
      <th scope="col">Email Id</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user) => (
    
          <tr key={user.id} className={user.isBlocked ? 'table-danger' : 'table-light'} >
            <td>{user.id}</td>
            <td>{user.userName}</td>
            <td>{user.emailId}</td>
            <td>

            {!user.isBlocked && (
                <button className="btn btn-danger" onClick={()=>{
                        handleSubmit(user.id)
                    }}>Block User</button>
              )}
              {/* <button className="btn btn-danger" data-testid="BlockUser" onClick={()=>{
                handleSubmit(user.id)
              }}>Block User</button> */}

              {
                user.isBlocked && (
                    <button className="btn btn-success" onClick={()=>{
                        handleUnblockUser(user.id)
                        }}>UnBlock User</button>
                  )
              }

              {/* <button className="btn btn-success" data-testid="unBlockUser" onClick={()=>{
                handleUnblockUser(user.id)
              }}>UnBlock User</button> */}
              <button className="btn btn-info">View</button>
            </td>
          </tr>
        ))}
  </tbody>
</table>


    </div>)

}

export default ViewAllUser;