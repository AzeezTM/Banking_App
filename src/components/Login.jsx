import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { toggleLogIn } from "../actions";


function LogIn(){
    const isLoggedIn = useSelector(({auth}) =>auth.isLoggedIn)
    const dispatch = useDispatch()
    const handleLogIn = () => {
    dispatch(toggleLogIn())
    }
    
    return(
       
       <div className="show">
       <h1 className="is-size-3">
         {isLoggedIn ? "You have logged In" : "You have logged out"}
        </h1>
         <button className="btn btn-success" onClick={handleLogIn}>
         {isLoggedIn ? "Log Out" : "Log In"}
         </button>
       
       </div>
    )
}

export default LogIn;