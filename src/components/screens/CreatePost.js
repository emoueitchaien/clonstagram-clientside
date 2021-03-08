import React, {useEffect, useState} from 'react'
import '../css/home.css'
import {useHistory} from 'react-router-dom'

const CreatePost = () => {

    const history = useHistory();
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    useEffect(()=>{
        if(url)
        {
            fetch("https://clonstagram.herokuapp.com//createpost", {  //http://localhost:5000/createpost
        method: "post",
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            caption,
            photo:url
        }),
        })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
            alert("Posted Successfully!")
          history.push('/')
        }
      });
        }
    },[url])

    var loadFile = event => {
        setImage(event.target.files[0]);
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.style = 'width:614px; margin-top:45px;'
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory 
        }        
    }


    const postDetails = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "clonsta")
        data.append("cloud_name", "tlaloc")
        
        fetch("https://api.cloudinary.com/v1_1/tlaloc/image/upload", {
            method:"post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })

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
                <input style={{marginTop:"20px"}} type="text" 
                    value={caption} onChange={(e)=>setCaption(e.target.value)} 
                    placeholder="Write a caption here..." />
                <button onClick={()=>postDetails()} style={{marginTop:"40px", width:"130px", height:"45px"}} className="btn waves-effect waves-light #64b5f6 blue lighten-1">
                    Share
                </button>
            </div>
        </div>
    )
}

export default CreatePost
