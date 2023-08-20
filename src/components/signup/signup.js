import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { v4 } from 'uuid';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default () => {

  // let dispatch = useDispatch();

  // let users = useSelector(store => store.userSection.users);

  // let adKaSection = useSelector(store => store.adSection);

  // let koiName = useSelector(store => store.videoSection)

  let data = useForm();
  let navigate = useNavigate();

  let params = useParams();

  let [users, setUsers] = useState([])



  useEffect(function () {



    if (params.userID) {
      //edit hora h user

      axios.get("/Get-User?id=" + params.userID).then((res) => {
        data.reset(res.data)


      })

      // let userMilgya = users.find(user => user.user_email == params.userEmail);

      // if (userMilgya) {
      //   data.reset(userMilgya)
      // }

    }



  }, [])



  const signupKaro = async (userData) => {



    // console.log(data);
    if (params.userID) {

      // let userIndex = users.findIndex(user => user.user_email == params.userEmail);

      // users[userIndex] = userData;
      // dispatch({
      //   type: "EDIT_HOGYA",
      //   payload: {
      //     index: userIndex,
      //     data: userData
      //   }
      // })

      let resp = await axios.put("/User-Edit", userData)
      if (resp.data == "successfully edited") {
        toast.success("User update hogya wa")
        navigate("/admin")
      }




    } else {
      // userData.id = v4();
      try {

        let resp = await axios.post("/Create-User", userData)
        console.log(resp.data)
        toast.success("User Created")

      } catch (e) {
        toast.error("Email already exsist")
      }

      // users = resp.data


      // users.push(userData)


      // dispatch({
      //   type: "USER-CREATED",
      //   payload: userData
      // })
    }
    data.reset();

  }


  return <div>




    <form onSubmit={data.handleSubmit(signupKaro)} className="col s12">

      <select {...data.register("type", {
        validate: (data) => {
          if (data == "Select Type") {
            return false;
          } else {
            return true
          }
        }
      })}  >
        <option>Select Type</option>
        <option>Employer</option>
        <option>Employee</option>
      </select>
        {data.formState.errors.type && data.formState.errors.type.type == "validate" && <div className='error'>Please select a type</div>}

      <div className="row">
        <div className="input-field col s6">
          <input
            {...data.register("user_name", { required: true })}
            placeholder="Placeholder"
            id="first_name"
            type="text"
            className="valida                                                                              
        te"
          />
          {data.formState.errors.user_name && <div className='error'>Please enter your name</div>}

          <label htmlFor="first_name">First Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            {...data.register("user_password")}
            id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
          {/* {data.formState.errors.user_password && data.formState.errors.user_password.type == "required" && <div className='error'>Enter password please</div>}
      {data.formState.errors.user_password && data.formState.errors.user_password.type == "minLength" && <div className='error'>Enter atleast 8 characters</div>}
      {data.formState.errors.user_password && data.formState.errors.user_password.type == "validate" && <div className='error'>Please include a "P" letter in your password</div>} */}
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            {...data.register("user_email", { required: true, validate:async (data)=>{
              let res=await axios.get("/check-email?email="+data)
              if (res.data) {
                return false
              }else{
                return true
              }
            } })}
            id="email" type="email" />
          <label htmlFor="email">Email</label>
          {data.formState.errors.user_email &&data.formState.errors.user_email.type=="required"&& <div className='error'>Enter email please</div>}
          {data.formState.errors.user_email && data.formState.errors.user_email.type=="validate" && <div className='error'>Email Already Exsist</div>}
        </div>
      </div>

      <div>
        <button>Submit</button>
      </div>

    </form>

  </div>

}