import React from 'react'

const Test = () => {
    return(
        <div style={{maxWidth:"500px"}}>
            <form action="#">
                <div class="file-field input-field">
                    <div class="btn">
                        <span>File</span>
                        <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Test
