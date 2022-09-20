import React, { useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import "./SignUpPage.css";

function SignUpPage() {
    const emailRef = useRef(null);
    const passwordRef= useRef(null);

    const register  = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser )=>{
            console.log(authUser)
        }).catch((error)=>alert(error.message))
    }
    const signIn = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>alert(error.message))
    }
  return (
    <div className='signUpPage'>
    <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email"/>
        <input ref={passwordRef} placeholder='Password' type="password"/>
        <button className='' type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='span1'>New to Netflix?</span><span className='span2' onClick={register}>Sign Up now.</span> </h4>
    </form>
      
    </div>
  )
}

export default SignUpPage;
