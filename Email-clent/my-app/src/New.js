import React from "react";
import './New.css';
import {Button} from "@material-ui/core";
import {login} from "./features/userSlice";
import {auth, provider} from "./Firebase";
import {useDispatch} from "react-redux";
function New() {


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
             .catch((error)=> alert(error.message))}
    return(
        <div className="login__container">
               
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    )}
export default New;