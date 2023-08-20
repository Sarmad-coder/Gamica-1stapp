
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";



export default () => {
let captcha=useRef("")

console.log(captcha.current)

  if (localStorage.getItem("token")) {
    return <Navigate to="/dashboard"></Navigate>
  }

  let dispatch = useDispatch();

  let form = useForm();
  let move = useNavigate();

  // let users = useSelector(state=>state.userSection.users);






  const loginKaro = async (data) => {
    console.log(data)

    let resp = await axios.get("/logged-user?email=" + data.email + "&password=" + data.password)

    // cu=resp.data



    // let userMilgya = users.find(user=>{

    //   if(user.user_email == data.email && user.user_password == data.password){
    //     return true;
    //   }

    // })

    if (resp.data) {
      // setLoggedUser(userMilgya);
      localStorage.setItem("token", resp.data.token)
      dispatch({
        type: "USER_LOGIN_HOGYA",
        payload: resp.data.user
      })
      // axios.get("/logged-user",userMilgya)


      move("/dashboard");
      // alert("user milgya wa")
    } else {
      alert("nahi mila");
    }

    console.log(data);
  }

  return <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <div className="section" />
      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section" />
      <div className="container">
        <div
          className="z-depth-1 grey lighten-4 row"
          style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form onSubmit={form.handleSubmit(loginKaro)} className="col s12" method="post">
            <div className="row">
              <div className="col s12"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  {...form.register("email")}
                  className="validate"
                  type="email"
                  name="email"
                  id="email"
                />
                <label htmlFor="email">Enter your email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  {...form.register("password")}
                  className="validate"
                  type="password"
                  // name="password"
                  id="password"
                />
                <label htmlFor="password">Enter your password</label>
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>
            <br />
            <center>
              <ReCAPTCHA
               ref={captcha}
                sitekey="6LcQ1YQjAAAAAOCVLcqm0Js-Y_BwooYpFbz8cSBQ"
              />
              <div className="row">
                <button
                  type="submit"
                  name="btn_login"
                  className="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <Link to="/signup">Create account</Link>
    </center>
    <div className="section" />
    <div className="section" />
  </main>



}