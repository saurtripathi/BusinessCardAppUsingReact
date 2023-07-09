// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '../public/vite.svg'



function Info() {


    return (
        <>
                <div className="image-div">
                    <img className="profile-pic" src="MyImage.png" alt="Profile Image" />
                </div>
                
                    <h4 className="name">Saurabh Tripathi</h4>
                    <h5 className="job-title">Frontend Developer</h5>
                    <h6 className="p-web">saurabhtripathi.website</h6>
                    <div className="div-btn" >
                        <button><img src="Mail.png" />Email</button>
                        <button className="btn-col"><img src="linkedin.png" />LinkedIn </button>
                    </div>
        </>

    )
}

export default Info
