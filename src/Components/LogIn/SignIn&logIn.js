import React, { useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider , signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import Authentication from '../../Firebase/Firebase.Init';

const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
const FbProvider = new FacebookAuthProvider()
Authentication()

const SingIn = () => {
    const [user, Setuser] = useState({})
    const [name, SetName] = useState(' ');
    const [password, SetPassword] = useState(' ');
    const [isLoggin, SetIsLoggin] = useState(false)
    const [email, SetEmail] = useState('');
    const [error, Seterror] = useState('')

    const auth = getAuth();

    const handleFbSingIn = () => {
        signInWithPopup(auth, FbProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.


                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const loggedUser = {
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                Setuser(loggedUser)
                console.log(result.user);
            })
    }

    const handleGitHubSingIn = () => {
        signInWithPopup(auth, GitHubProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.


                // The signed-in user info.
                const { displayName, email, photoURL } = result.user;
                const loggedUser = {
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                Setuser(loggedUser)
                console.log(result.user);
            })
    }

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.



                const { displayName, email, photoURL } = result.user;
                const loggedUser = {
                    name: displayName,
                    email: email,
                    img: photoURL
                }
                Setuser(loggedUser)
                console.log(result.user);
            })


    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                Setuser({})
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });


    }
    const handleRegistration = e => {
        // e.preventDefault()
        if (password.length < 6) {
            Seterror('Password Must be minimum 6 Character')

        }

        isLoggin ? LogInUser(email, password) : registerNewUser(email, password)

    }
    const emailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const LogInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // Signed in 
                const { displayName, email, photoURL } = userCredential.user;
                const loggedUser = {
                    name: displayName, email: email,img:photoURL
                }
                Setuser(loggedUser)
                Seterror('')
                console.log(loggedUser);
                // ...
            }).catch(error => {
                Seterror(error.message)
            })

    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user
            Seterror('Verification Email Send Check your Email Inbox')
            
            emailVerify()
            SetUserName()
                console.log(user);
            }).catch(error => {
                Seterror(error.message)
            })
    }
    const SetUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
               
            })
 }
    const handleName = e => {
        SetName(e.target.value)
        console.log(name);
                }
    const handleEmail = e => {
        SetEmail(e.target.value)
        console.log(email, password);
    }
    const handlePassword = e => {
        SetPassword(e.target.value)
        console.log(e.target.value);
    }
    const handleCheckBox = (e) => {
        SetIsLoggin(e.target.checked);
        console.log(isLoggin);
    }
    const handleResetPass = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Seterror("Password reset email sent")
                // ..
            })
            .catch((error) => {

                Seterror(error.message);
                // ..
            });
    }
    return (
        <div>

            <div className='container w-50 mt-5 mb-5'>
                <h1 className='text-primary text-start' >Please {isLoggin ? "Login" : "Register"}</h1>
                <form onSubmit={handleRegistration} action="#">
                    {
                        !isLoggin && <div className="mb-3 row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input  onBlur={handleName} type="text" className="form-control" id="Name" />
                            </div>
                        </div>
                    }
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input required onBlur={handleEmail} type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div>  <input onChange={handleCheckBox} type="checkbox" className='me-2' name="" id="Checkbox" />
                        <label htmlFor="Checkbox" className=" col-form-label">Already Registered?</label></div>
                    <p className='text-danger'>{error}</p>
                    <button type="submit" className="btn btn-primary"><b>{isLoggin ? "LOGIN" : "REGISTER"}</b></button>
                    <br /> <br />
                    <div>
                        {
                            isLoggin && <button type="button" className="btn btn-info text-white" onClick={handleResetPass}>Forgot Password</button>
                        }
                    </div>

                </form>

            </div>

            {!user.name || user.email ?
                <div><button type="button" className="btn btn-success me-3" onClick={handleGoogleSingIn}>Sing in With Google</button>
                    <button type="button" className="btn btn-dark me-3" onClick={handleGitHubSingIn}>Sign in With Git Hub</button>
                    <button type="button" className="btn btn-primary me-3" onClick={handleFbSingIn}>Sign in With Facebook</button></div> :
                <button type="button" className="btn btn-secondary" onClick={handleSignOut}>Sign out</button>


            }


            <br />
            {
                user.name  && <div>
                    <h2>Welcome {user.name} </h2>
                    <img src={user.img} alt="" /></div>
            }

        </div>
    );
};



export default SingIn;