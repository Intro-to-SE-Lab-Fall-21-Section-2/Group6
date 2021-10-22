import React from "react";
import "./Login.css";
import {login} from "./features/userSlice";
import {Button} from "@material-ui/core";
import {auth, provider} from "./Firebase";
import {useDispatch} from "react-redux";

const Login = (props) =>{
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
    const { email, setEmail,password, setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}= props;
    return (
        <div className='login'>

            <div className="login__container">
               <label> Username</label>
               <input type ="text" autoFocus required 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               />
               <p className ="errorMsg">{emailError}</p>
               <label>Password</label>
               <input type ="password" required value={password}  onChange ={(e)=> setPassword(e.target.value)}/>

               <p className ="errorMsg">{passwordError}</p>
               <div className ="btnContainer"> 
               {hasAccount ?(
                <>
                <button onClick={handleLogin}>Sign In</button>
                <p> Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                </>
               ) : (
                <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                </>
               )}
               
               </div>


               <div className="login__container">
               
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
    
               
            
            
            
            
            </div>
            
        </div>
    );
}
export default Login;