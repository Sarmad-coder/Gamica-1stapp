import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {

    let params = useParams();
    // let dispatch = useDispatch();
    // let users = useSelector(store => store.userSection.users);

    let [users, setUsers] = useState([])

    useEffect(() => {

        axios.get("/Get-Users").then((res) => {
            setUsers(res.data)
        })
    }, [])



    // params.roll;

    return <div>
        <table>
            {
                users.map((user, meraIndex) => {
                    return <tr>
                        <td>{user.user_name}</td>
                        <td>{user.user_password}</td>
                        <td>{user.user_email}</td>
                        <td><button onClick={() => {

                            axios.delete("/User-Delete?id=" + user._id).then((res) => {
                                if (res.data == "success") {
                                    users.splice(meraIndex, 1)
                                    setUsers([...users]);
                                }
                            })

                            // users.splice(meraIndex, 1);
                            // setUsers([...users]);

                        }}>Delete</button></td>
                        <td>
                            <Link to={"/signup/" + user._id}>Edit</Link>
                        </td>
                    </tr>
                })
            }
        </table>

    </div>

}