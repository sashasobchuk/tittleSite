import React, {useEffect, useState} from "react";
import video1 from '../../acces/video/the-limba-andro-xo_304638.mp4'
import  './video.css'
const VideoItem = () => {

    return (<>
        <div  className="videoItem">
            <div className='videoItem__videoPlayer'>
                <video width="100%"       controls className='videoItem__videoTag' >
                    <source src={video1} type="video/mp4"/>
                </video>
            </div>

            <span className='videoItem__comment'>
               11 назва чи опис відео
            </span>
            <span className='videoItem__comment'>
                22назва чи опис відео
            </span>
        </div>


    </>)
}

export default VideoItem