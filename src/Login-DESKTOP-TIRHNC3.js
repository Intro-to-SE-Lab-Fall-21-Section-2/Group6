import React from "react";
import "./Login.css";
import {login} from "./features/userSlice";
import {Button} from "@material-ui/core";
import {auth, provider} from "./Firebase";
import {useDispatch} from "react-redux";

function Login()
{
    const dispatch = useDispatch();
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <div className="login__container">
                <img
                    src="https://www.freepnglogos.com/uploads/email-logo-png-22.png"
                    alt=""
                />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    );
}

export default Login;