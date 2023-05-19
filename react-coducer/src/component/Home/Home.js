import { useEffect, useCallback, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";


const url = 'http://localhost';

const Home = () => {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    const getUsers = useCallback(async () => {
        try {

            const respone = await axios.get(`${url}:4000/user/data`, { headers: { "Authorization": token } });

            if (respone.status === 200) {
                setUsers([...respone.data.users])
            }
            else {
                throw new Error('Failed to fetch data');
            }
        }
        catch (error) {
            console.log(error);
        }

    }, [])

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate('/');
    }



    return (
        <div className="row justify-content-center">
            <h1 className="text-center">User Details</h1><br /><br /><br />
            <div className="col-md-8" >
                <Table striped >
                    <thead>
                        <tr>
                            <th><h5 className="fw-bold">Name</h5></th>
                            <th><h5 className="fw-bold">Email</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id}>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <Button variant="danger" onClick={logoutHandler} >Logout</Button>

            </div>
        </div>

    );
};

export default Home;