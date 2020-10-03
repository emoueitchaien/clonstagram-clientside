import React from 'react'
import routine from '../photos/tay/routine.jpg'
import '../css/home.css'
import routine2 from '../photos/tay/routine2.jpg'
import routine3 from '../photos/tay/routine3.jpg'

const Home = ()  => {
    return(
        <div className="home">
            <div className="card home-card">
                <div style={{height:"60px", border:"1px solid #efefef", padding:"16px"}}><h6 style={{margin:"0px", fontSize:"14px", fontWeight:"bold"}}>routineofnepalbanda</h6></div>
                <div className="card-image">
                    <img src = {routine}/>
                </div>
                <div className="card-content">
                    <p><b>routineofnepalbanda</b> We have reached the milestone of 2 Lakhs+ members in our Viber community.</p>
                </div>
                <div className="comment" style={{border:"1px solid #efefef", padding:"16px"}}>
                    <input style={{border:"none", outline:"none", width:"582px", height:"20px"}}className="browser-default" type="text" placeholder="Add a comment..."/>
                </div>
            </div> 
            <div className="card home-card">
                <div style={{height:"60px", border:"1px solid #efefef", padding:"16px"}}><h6 style={{margin:"0px", fontSize:"14px", fontWeight:"bold"}}>routineofnepalbanda</h6></div>
                <div className="card-image">
                    <img src = {routine2}/>
                </div>
                <div className="card-content">
                    <p><b>routineofnepalbanda</b> We have reached the milestone of 2 Lakhs+ members in our Viber community.</p>
                </div>
                <div className="comment" style={{border:"1px solid #efefef", padding:"16px"}}>
                    <input style={{border:"none", outline:"none", width:"582px", height:"20px"}}className="browser-default" type="text" placeholder="Add a comment..."/>
                </div>
            </div>
             <div className="card home-card">
                <div style={{height:"60px", border:"1px solid #efefef", padding:"16px"}}><h6 style={{margin:"0px", fontSize:"14px", fontWeight:"bold"}}>routineofnepalbanda</h6></div>
                <div className="card-image">
                    <img src = {routine3}/>
                </div>
                <div className="card-content">
                    <p><b>routineofnepalbanda</b> We have reached the milestone of 2 Lakhs+ members in our Viber community.</p>
                </div>
                <div className="comment" style={{border:"1px solid #efefef", padding:"16px"}}>
                    <input style={{border:"none", outline:"none", width:"582px", height:"20px"}}className="browser-default" type="text" placeholder="Add a comment..."/>
                </div>
            </div>
        </div>
    )
}

export default Home
