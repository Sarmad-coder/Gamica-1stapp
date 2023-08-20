import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"
import some from "./dashboard.module.css";
import { useEffect, useState } from "react"

export default () => {


    if (!localStorage.getItem("token")) {
        return <Navigate to="/login"></Navigate>
    }
    // let [jobs, setJobs] = useState(useSelector(store => store.jobSection));
    let [jobs, setJobs]=useState([]);
    let user = useSelector(store => store.userSection.cu);

    useEffect(()=>{
        if(user._id){

            axios.get("/Get-Jobs-Dashboard?userID="+user._id).then((res)=>{

                setJobs(res.data)

                console.log(res.data)
            })
        }
    },[user])

    let move=useNavigate()

    const deleteJob = (id,userID) => {

        axios.delete("/job-delete?id=" + id+"&userID="+ userID)
        let index = jobs.findIndex(job => job._id == id)
        jobs.splice(index, 1)
        setJobs([...jobs])
    }

    return <div>
        <h1>Welcome to Dashboard</h1>
        <div id="job-container" className={some.main}>
            {
                jobs.map((job) => {
                    return <div className="job">
                        <img src={job._id + "/" + job.picture}></img>
                        <h4>{
                            job.title
                        }
                        </h4>
                        <p>{job.description}</p>
                        <h5>{job.salary}</h5>
                        {user.type != "Employer" && <button>Apply Now</button>}
                        {user.type != "Employee" && <button onClick={() => {
                            deleteJob(job._id,job.userID)
                        }}>Delete</button>}
                        {user.type != "Employee" && <button onClick={() => {
                            // editJob(job._id) 

                            move("/create-job/"+job._id)
                        }}>Edit</button>}

                    </div>

                })
            }
        </div>

    </div>

}