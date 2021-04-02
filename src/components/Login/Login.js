import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    // initialize app 
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const user = result.user;
                handleResponse(user, true)
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="p-5 row no-gutters d-flex justify-content-center bg-white">

            <div className="col-md-4 shadow col-md-offset-4 p-5">
                <h2 className="mb-4" id="login">
                    <FontAwesomeIcon className="mr-3" icon={faKey}></FontAwesomeIcon>Log In
                </h2>
                <p className="text-left">Do you want to explore the collection of programming books ? then you are in a right place please log in before exploring our awesome book collections</p>
                <Button id="google-login" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon className="mr-3" icon={faGoogle}></FontAwesomeIcon>Log in with google</Button>
            </div>
        </div>
    );
};

export default Login;