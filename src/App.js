import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Home from './components/home/home';
import Admin from './components/admin/admin'
import { useState } from 'react';
import CreateJob from './components/CreateJob/CreateJob';
import Dashboard from "./components/dashboard/dashboard";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import meraStore from "./store/store";
import { Provider, useDispatch } from 'react-redux';
import { useEffect} from "react";

import M from 'materialize-css';
import Confirm from './components/confirm/confirm';
import axios from "axios";


let student = {
  name: "rameez"
}

let { name } = student;

function Frame({ mySrc, size, videoId }) {
  return <div className="frame-piece">
    <img src="frame.png" />
    <img className="frame-pic" src={"/images/" + mySrc} alt="" />
  </div>
}

function Test({ a1, data, setData, i }) {

  // let [data, setData] = useState(0)
  // let [data1, setData1] = useState(20)

  useEffect(() => {

    console.log("use effect chaling");

    return () => {
      console.log("test component jying")
    }
    // document.getElementById("some1").innerText  ="cat";

  }, []);


  return <div>
    <h3 onClick={() => {

      data.splice(i, 1);
      setData([...data]);

    }}>{a1}</h3>
    {/* <h1>data {data}</h1>
      <h1>data1 {data1}</h1>

    <h1 id="some1">Apple</h1>
    <button onClick={()=>{

    setData(data+1)

    }}>Add</button>
     <button onClick={()=>{

setData1(data1+1)

}}>Add1</button> */}
  </div>

}



export default () => {

  let [data, setData] = useState(["FSD", "GOJRA", "TOBA", "SANGLA"]);
  let [meraModal, setMeraModal] = useState(80);
  let dispatch = useDispatch()

  useEffect(() => {
    axios.post("/session-check", { token: localStorage.getItem("token") }).then((res) => {
      if (res.data) {
        dispatch({
          type: "USER_LOGIN_HOGYA",
          payload: res.data
        })

      } else {
        localStorage.removeItem("token")
      }
    })

    meraModal = M.Modal.init(document.getElementById('confirmDialog'), {});
    setMeraModal(meraModal)

  }, []);


  // let dispatch=useDispatch()
   

  return <div id="appContainer">

    <Confirm a5={meraModal}></Confirm>

    <button onClick={() => {
      meraModal.open();

    }}>Open modal</button>


    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/:userID" element={<Signup />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/create-job/:jobID" element={<CreateJob />} />
          <Route path="/create-job" element={<CreateJob />} />

          <Route path="/result/:roll" element={<Admin />} />

          <Route path="/:province/:city/:uni" element={<Test />} />

          {/* <Route path="/hamza.rajpoot.9047506" element={<Signup />} />
   <Route path="/khurram.raheel.37" element={<Signup />} /> */}

        </Routes>
      </main>

      <Footer></Footer>
      <ToastContainer></ToastContainer>

      {/*   
    <Player videoId="dffA333A" friends={ ["ahmed", "rameez", "khurram"] } />
  <Chatbox friends={ ["ali", "faiza", "sufyan"] } />

      <Frame size="5" mySrc="1.png" />
      <Frame mySrc="2.png" />
      <Frame mySrc="3.jpg" /> */}


    </BrowserRouter>

  </div>



}