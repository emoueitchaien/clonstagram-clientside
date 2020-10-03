import React from 'react'
import logo from '../photos/insss.png'
import photo from '../photos/sigup.png'
import photo2 from '../photos/photo2.png'
import iosapp from '../photos/iosapp.png'
import andapp from '../photos/andapp.png'
import fbicon from '../photos/fbicon.png'
import {Link} from 'react-router-dom'
import '../css/login.css'

const Login = ()  => {
    return(
        <div className='mainbody'>
            <div className='signupphoto1'>
                <img className='photo1' src = {photo}/>
                <img className='photo2' src = {photo2}/>
            </div>
            <div>
                <div style={{height:'382px'}} className='signin'>
                    <img className='logo' src = {logo}/>     
                    <input className="browser-default inputfield" type='text' placeholder="Phone number, username, or email" />
                    <input className="browser-default inputfield" type='password' placeholder="Password"/>
                    <button class="browser-default bttn" disabled='true'>
                        Log In
                    </button>
                    <br/>
                    <div style={{height:'15px', width:'268px',marginTop:'12px', marginLeft:'auto', marginRight:'auto'}}>
                        <div className='s311c' style={{float:'left'}}></div>
                        <div className='or'>OR</div>
                        <div className='s311c' style={{float:'right'}}></div>
                    </div>
                    <div className='logwidfb'>
                        <span className='lwfimg'>
                            <img height='16px' width='16px' src={fbicon}/>
                        </span>
                        <span className='logtext'>
                            <p className='lwftxt'>Log in with Facebook</p>
                        </span>
                    </div>
                    <p style = {{paddingTop:"14px", paddingBottom: "5px", fontFamily:"Helvetica", fontSize: "12px"}}>
                        <a href="#" style={{color:"#00376B"}}>Forgot password?</a>
                    </p>
                </div>
                <div className='signin signin2'>
                    <p>Don't have an account? <Link to="/signup" style={{fontWeight:"bold"}}> Sign up</Link></p>
                </div>
                <div className='getapp'>
                    <p style={{textAlign:'center'}}>Get the app.</p>
                    <div className='applink'>
                        <a target='_blank' href='https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo'>
                            <img height='40px' width='136px' src = {iosapp}/>
                        </a>
                        <a target='_blank' href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D2812111B-61E2-42F2-8CA8-B9DF0F227CE0%26utm_content%3Dlo%26utm_medium%3Dbadge'>
                            <img style={{marginLeft:'8px'}} height='40px' width='134.283px'src = {andapp}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login