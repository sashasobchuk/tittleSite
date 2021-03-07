import React, {useEffect, useState} from "react";
import video1 from '../../acces/video/the-limba-andro-xo_304638.mp4'
import {hostUrl} from "../../acces/config"

import  './video.css'
import {useDispatch, useSelector} from "react-redux";
import { DeleteItem_T} from "../../redux/videoPageReducer";
const VideoItem = (props) => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state=>state.header.isAuth)

    const video = props.item._id === 'standard' ? `${props.item.video_Url_Name}` : `${hostUrl + props.item.video_Url_Name}`
        useEffect(()=>{

        },[])

    function deleteVideoItemHandler() {
    dispatch(DeleteItem_T(props.item._id))
    }

    return (<>
        <div  className="videoItem">
            <div className='videoItem__videoPlayer'>
                <video width="100%"   src={video}      controls className='videoItem__videoTag' >
                </video>
                {isAuth ===true &&<div className= 'videoItem__deleteItem'><input onClick={deleteVideoItemHandler} type="button" value='x'/></div>}

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