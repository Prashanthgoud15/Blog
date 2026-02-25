import React from "react";
import './banner.css'

function Banner() {

    return(
       <div className="banner-div">    
        <div className="overlay">
            < h1 id="banner-title">Welcome to My Blog</h1>
        </div>
        <img src="/media/Banner.jpg" alt="" width={'100%'} height={'430px'} style={{objectFit:'cover'}}/>
        </div>
    )
}
export default Banner;