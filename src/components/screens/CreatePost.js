import React from 'react'
import '../css/home.css'

const CreatePost = () => {
    var loadFile = event => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.style = 'width:614px; margin-top:45px;'
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }        
    }
    return(
        <div>
            <div style={{maxWidth:"720px", margin:"30px auto", padding:"20px 50px 50px 50px", textAlign:"center"}} className="card">
                <h4 id="h4" style={{marginBottom:"40px"}}>New Post</h4>
                <div className="file-field input-field">
                    <div className="btn">
                        <span>Photo</span>
                        <input id="file" type="file" accept="image/*" onChange={loadFile}/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="&#9;Select your photo..."/>
                    </div>
                    <img id="output"/>
                </div>
                <input style={{marginTop:"20px"}} type="text" placeholder="Write a caption here..."/>
                <button style={{marginTop:"40px", width:"130px", height:"45px"}} className="btn waves-effect waves-light #64b5f6 blue lighten-1">
                    Share
                </button>
            </div>
        </div>
    )
}

export default CreatePost
