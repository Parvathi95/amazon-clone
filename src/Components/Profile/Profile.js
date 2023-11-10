import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
       <div className="Profile">
        <Link to="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" className='ProfileLogo' />
        </Link>
        <div className="ProfileContainer">
            <h1>Your Profile</h1>
            <form>
                <h5>Name</h5>
                <input type="text"  placeholder='Enter Your Name'/>
                <h5>Email</h5>
                <input type="email" placeholder='Enter Your Email' disabled />
                <h5>Phone No</h5>
                <input type="text" placeholder='Enter Your Contact Number'/>
                <button className="ProfileSigninButton">
                    Update Profile
                </button>
            </form>
        </div>
       </div>
    </div>
  )
}

export default Profile