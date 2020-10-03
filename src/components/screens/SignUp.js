import React from 'react'
import {Link} from 'react-router-dom'
import '../css/signup.css'

const SignUp = ()  => {
    return(
        <div className='mainbody signupbody'>
            <div className='card mycard input-field'>
                <h2>Instagram</h2>
                <input className="input-field" type="text" placeholder='Email or Phone'/>
                <input className="input-field" type="text" placeholder='Full Name'/>
                <input className="input-field" type="text" placeholder='Userame'/>
                <input className="input-field" type="password" placeholder='Password'/>
                <button className="btn mt-15 waves-effect waves-light #64b5f6 blue lighten-2">SignUp</button>
                <div className='link2login'>
                    <p>Already have an account? <Link to="/" style={{fontWeight:"bold"}}> Login</Link></p>
                </div>

            </div>
        </div>
    )
}

export default SignUp
