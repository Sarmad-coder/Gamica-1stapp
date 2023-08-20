import axios from "axios";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default ({ jobs }) => {

    let params = useParams()
    let data = useForm();
    let dispatch = useDispatch();
    let user = useSelector(store => store.userSection.cu);


    if (params.jobID) {
        useEffect(() => {

            axios.get("/job-for-edit?jobID=" + params.jobID).then((res) => {
                data.reset(res.data)
            })
        }, [])
    }


    const createJob = async (data) => {
        if (params.jobID) {

            
              await axios.put("job-edit",data)
            
        } else {


            data.id = v4();
            data.userID = user._id;

            // dispatch({
            //     type:"JOB_BANGYI",
            //     payload:data
            // })
            // data.picture=data.picture[0]
            let f1 = new FormData()
            f1.append("title", data.title)
            f1.append("description", data.description)
            f1.append("salary", data.salary)
            f1.append("userID", data.userID)
            f1.append("picture", data.picture)
            // for (let picture of data.picture) {
            //     f1.append("picture", picture)
            // }
console.log(f1)
            let resp = await axios.post("/job-created", f1)





            console.log(data);
            // jobs.push(data);

        }

    }


    return <div>
        <form onSubmit={data.handleSubmit(createJob)}>
            <div>
                <input {...data.register("title")} type="text" placeholder="Job title" />
            </div>
            <div>
                <input {...data.register("description")} type="text" placeholder="description" />
            </div>
            <div>
                <input {...data.register("salary")} type="text" placeholder="salary" />
            </div>

            <div>
                <input  {...data.register("picture")} type="file" />
            </div>
            <button>Create Job</button>
        </form>
    </div>

}