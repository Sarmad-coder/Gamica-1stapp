import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default()=>{

  let cu = useSelector(store=>store.userSection.cu)
  let dispatch = useDispatch();

  // let [cu,setCU]=useState({})
  // useEffect(()=>{
  //   axios.get("/current-user").then((res)=>{
  //     setCU(res.data)
  //   })
  // })

    return <nav>
    <div className="nav-wrapper">
      <Link to ="/" className="brand-logo">
        Logo
        </Link>
        <Link to ="/dashboard">
        {cu.user_name && <b>Welcome, {cu.user_name}</b>}
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
       {cu._id && <li>
          <Link to="/create-job">Create Job</Link>
       
        </li>
}
        {cu.user_name == undefined && 
        <>
          <li>
            <Link to="/login">login</Link>
          </li>    
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
}
        {
          cu.user_name && 
          <li>
            <Link to="/login" onClick={()=>
              {
                dispatch({
                  type:"LOGOUT_HOGY_AW"
                });
                // setLoggedUser({})
                localStorage.removeItem("token")

              }
            }>Logout</Link>
          </li>
        }

      
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  </nav>
  

}