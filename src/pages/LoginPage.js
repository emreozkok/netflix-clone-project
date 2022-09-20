import React, { useState } from 'react';
import "./LoginPage.css";
import SignUpPage from './SignUpPage';
import {Link} from "react-router-dom";

function LoginPage() {
    const [signIn, setSignIn] = useState(false);

  return (
    <div className='login'>
      <div className='login_background'>
       <Link to="/"><img
            className='login_logo'
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
            alt=""
        /></Link> 
        <button className='login_button' onClick={()=>setSignIn(true)}>Sign In</button>
        <div className='login_gradient'/>
      </div>
      <div className='login_body'>
      {signIn ? <SignUpPage/> : 
      <>
            <h1>Unlimited films, TV programmes and more...</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to Watch? Enter your email to create or restart 
            your membership.</h3>
            <div className='login_input'>
                <form>
                    <input type="email"
                        placeholder='Email Address'
                    />
                    <button className='login_getstarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
                </form>
            </div>
        </>}
        
      </div>
    </div>
  )
}

export default LoginPage
