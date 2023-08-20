import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import './home.css';
import axios from "axios";
export default () => {
    let [resp, setResp] = useState();
    useEffect(() => {
        async function show() {
            let resp = await axios.get("http://api.weatherapi.com/v1/current.json?key=28ccb6fe1eed4569beb70425221511&q=Faisalabad&aqi=no")
            setResp(resp)
        }
        show()
    }, [])
    // console.log(resp)
    // let jobs = useSelector(store => store.jobSection);

    let user = useSelector(store => store.userSection.cu);

    // let [jobs, setJobs] = useState(useSelector(store => store.jobSection));

    let [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("/Get-Jobs").then((res) => {
            setJobs(res.data)

            // dispatch({
            //     type: "job-created",
            //     payload: res.data
            // })
        })
    }, [])

    const deleteJob = (id) => {

        axios.delete("/job-delete?id=" + id)
        let index = jobs.findIndex(job => job._id == id)
        jobs.splice(index, 1)
        setJobs([...jobs])
    }

    return <div id="job-container">
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
                    {user.type == "Employer" && <button onClick={() => {
                        deleteJob(job._id)
                    }}>Delete</button>}


                </div>
            })
        }

    </div>
}