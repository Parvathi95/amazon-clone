import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="Login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" className='LoginLogo'/>
            </Link>
            <div className="LoginContainer">
                <h2>Sign In</h2>
                <form>
                    <h4>Email</h4>
                    <input type="email" placeholder='Your Email' />
                    <h4>Password</h4>
                    <input type="email" placeholder='Your Password' />
                    <button className='LoginButton'>Sign In</button>
                </form>
                <a className='LoginSignInButtonGoogle'>
                    <img src="https://pngimg.com/uploads/google/google_PNG102344.png" alt=""  className='loginGoogleImg'/>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Login