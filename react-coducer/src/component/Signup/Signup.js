import React, { useRef, Fragment } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = 'http://localhost';

const Signup = (props) => {
    const navigate = useNavigate();

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
   

    const signupHandler = async (event) => {
        try {
            event.preventDefault();

            const enteredName = nameInputRef.current.value;
            const enteredEmail = emailInputRef.current.value;
            const enteredPassword = passwordInputRef.current.value;


            const userDetails = {
                name: enteredName,
                email: enteredEmail,
                password: enteredPassword
            }

            nameInputRef.current.value = '';
            emailInputRef.current.value = '';
            passwordInputRef.current.value = '';
            
            
            const respone = await axios.post(`${url}:4000/user/signup`, userDetails)
            if (respone.status === 201) {
                alert(respone.data.message);
                navigate('/');
            }
            else {
                throw new Error('Failed to Signup');
            }
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <Fragment><br />
            <div className="row justify-content-center">
                <h1 className="text-center">SignUp</h1><br /><br /><br /><br />

                <div className="col-md-4">
                    <form id="loginform" onSubmit={signupHandler}>

                    <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                required ref={nameInputRef}
                            />
                        </div><br />

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                required ref={emailInputRef}
                            />
                        </div><br />

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                required ref={passwordInputRef}
                            />
                        </div><br />


                        <div className="d-grid gap-2">
                            <Button type="submit" variant="primary" size="lg">SignUp</Button>
                            <p className="text-center" > <Link to="/">Already Registered? Login</Link></p><br />
                        </div>

                    </form><br /><br /><br />
                </div>
            </div>
        </Fragment>
    );
};

export default Signup;