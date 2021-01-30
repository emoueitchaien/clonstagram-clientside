import React from 'react'
import '../css/profile.css'

import defaultdp from '../photos/defaultdp1.jpg'
import tay1 from '../photos/tay/tay1.jpg'
import tay2 from '../photos/tay/tay2.jpg'
import tay3 from '../photos/tay/tay3.jpg'
import tay4 from '../photos/tay/tay4.jpg'
import tay5 from '../photos/tay/tay5.jpg'
import tay6 from '../photos/tay/tay6.jpg'
import tay7 from '../photos/tay/tay7.jpg'
import tay8 from '../photos/tay/tay8.jpg'
import tay9 from '../photos/tay/tay9.jpg'
import tay10 from '../photos/tay/tay10.jpg'
import tay11 from '../photos/tay/tay11.jpg'
import tay12 from '../photos/tay/tay12.jpg'
import tay13 from '../photos/tay/tay13.jpg'
import tay14 from '../photos/tay/tay14.jpg'
import tay15 from '../photos/tay/tay15.jpg'


const Profile = () => {
    return(
        <div className="profilebody" style={{
            margin:"0px auto",
            maxWidth:"935px"
            }}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"30px 0px",
                paddingBottom: "20px",
                paddingLeft: "2.15%",
                borderBottom: "1px solid #dbdbdb"
                }}>

                <div>
                    <img style = {{width:"150px", height:"150px", borderRadius:"75px"}}src={defaultdp}/>
                </div>

                <div style={{
                    marginRight:"17.75%", 
                    }}>
                    <h4 style={{marginTop:"5px", marginBottom:"13px", fontSize:"28px"}}>taylorswift</h4>
                    <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        width:"85%",
                        fontSize:"16px"
                        }}>
                        <h6>461 posts</h6>
                        <h6>140m followers</h6>
                        <h6>0 following</h6>
                    </div>
                    <div className="bio">
                        <p style={{fontWeight:"bold"}}>Taylor Swift</p>
                        <p>you drew stars around my scars</p>
                        <p><a href="taylor.lnk.to/folkloredlx">taylor.lnk.to/folkloredlx</a></p>
                        <p style={{lineHeight:"25px", fontSize:"13px"}}>Followed by shrinkhala_, asiashrestha25, navraj.bhattarai.11 +1 more</p>
                    </div>
                </div>
            </div>
 
            <div style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"space-between",
                }}>
                <img alt="tay1" className="item" width="293px" height="293" src={tay1}/>
                <img alt="tay2" className="item" width="293px" height="293" src={tay2}/>
                <img alt="tay3" className="item" width="293px" height="293" src={tay3}/>
                <img alt="tay4" className="item" width="293px" height="293" src={tay4}/>
                <img alt="tay5" className="item" width="293px" height="293" src={tay5}/>
                <img alt="tay6" className="item" width="293px" height="293" src={tay6}/>
                <img alt="tay7" className="item" width="293px" height="293" src={tay7}/>
                <img alt="tay8" className="item" width="293px" height="293" src={tay8}/>
                <img alt="tay9" className="item" width="293px" height="293" src={tay9}/>
                <img alt="tay10" className="item" width="293px" height="293" src={tay10}/>
                <img alt="tay11" className="item" width="293px" height="293" src={tay11}/>
                <img alt="tay12" className="item" width="293px" height="293" src={tay12}/>
                <img alt="tay13" className="item" width="293px" height="293" src={tay13}/>
                <img alt="tay14" className="item" width="293px" height="293" src={tay14}/>
                <img alt="tay15" className="item" width="293px" height="293" src={tay15}/>
            </div>
       </div>
    )
}

export default Profile
