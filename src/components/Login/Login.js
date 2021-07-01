import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock, faSignature } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Login.css';
import { createUserWithEmailAndPassword, handleGoogleSignIn, initializeFirebase, signInWithEmailAndPassword } from './LoginManager';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
const Login = () => {
    initializeFirebase();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        password: '',
        success: false
    });
    console.log(user)
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        setUser(res);

        if (redirect) {
            history.replace(from);
        }
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
            if (!isFormValid) {
                setEmailError('Email is invalid')
            }
            else {
                setEmailError('');
            }
        }
        if (event.target.name === 'password') {
            const passwordLength = event.target.value.length > 6;
            const hasNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && hasNumber;
            if (!isFormValid) {
                setPasswordError('Password should have number and letters and length must be greater than 6');
            }
            else {
                setPasswordError('');
            }
            console.log(isFormValid);
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    setUser(res);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true)
                    console.log(res.error)
                })
        }
        event.preventDefault();
    }

    return (
        <div className="authentic-field bg-white">
            <Container className="h-100">
                <Row className="m-3">
                    <div className="col-md-6 offset-md-3 shadow mt-4 p-4">
                        <h4 className="display-5 price-title"><b>User Authentication</b></h4>
                        <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                        <form action="" onSubmit={handleSubmit} className="mt-4">
                            {newUser && <div className="input-field mb-3">
                                <FontAwesomeIcon icon={faSignature} className="icons"></FontAwesomeIcon>
                                <input onBlur={handleBlur} type="text" name="name" id="name" placeholder="name" required />
                            </div>}
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faUser}></FontAwesomeIcon>
                                <input onBlur={handleBlur} id="email" type="text" name="email" placeholder="Enter your email" required autoComplete="true" />
                            </div>
                            <p className="text-danger">{emailError}</p>
                            <div className="input-field mb-3">
                                <FontAwesomeIcon className="icons" icon={faLock}></FontAwesomeIcon>
                                <input onBlur={handleBlur} type="password" name="password" placeholder="Enter password" id="password" required />
                            </div>
                            <p className="text-danger">{passwordError}</p>
                            <div className="checkbox mb-2">
                                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                                <label htmlFor="newUser" className="ml-2">Sign up if you are new here </label>
                            </div>
                            <div className="">
                                <button className="submit-button mb-2">{newUser ? 'Sign Up' : 'Sign In'}</button>
                                <button onClick={googleSignIn} className="submit-button  mb-2">Sign in with google</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;