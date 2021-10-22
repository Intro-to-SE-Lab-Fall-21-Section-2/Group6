import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from './Mail';
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Login from "./Login";
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import firebase from 'firebase/app'
import "firebase/auth"

function App()
{
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code)
                {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setEmailError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code)
                {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setEmailError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        firebase.auth().signOut();

    };

    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user)
            {
                clearInputs();
                setUser(user);
            } else
            {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);


    return (
        <Router>
            {user ? (
                <Header handleLogout={handleLogout}/>
            ) : (
                <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}
            <div className="App">
                <div className="app_body">
                    <Sidebar/>
                    <Switch>
                        <Route path="/mail">
                            <Mail/>
                        </Route>
                        <Route path="/">
                            <EmailList/>
                        </Route>
                    </Switch>
                </div>
                {sendMessageIsOpen && <SendMail/>}
            </div>
        </Router>
    )
};
export default App;