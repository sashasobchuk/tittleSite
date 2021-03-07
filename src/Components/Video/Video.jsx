import React, {useEffect, useState} from "react";
import video1 from '../../acces/video/the-limba-andro-xo_304638.mp4'
import './video.css'
import VideoItem from "./VideoItem";
import {useDispatch, useSelector} from "react-redux";
import {DownloadFotoPage} from "../../redux/fotoPageReducer";
import {DownloadVideoPage} from "../../redux/videoPageReducer";
import PopUp from "../popUp/PopUp";
import AddFotoItem from "../Foto/AddFotoItem";
import AddVideoItem from "./AddVideoItem/AddVideoItem";

const Video = () => {
    const videoPage=useSelector(state=>state.videoPage)
    const dispath = useDispatch()
    useEffect(() => {
        dispath(DownloadVideoPage())
    }, [])

    return <div className="videoPage">

        { videoPage.videoItems.map(item=>
            <VideoItem   item={item} />
        )}<AddVideoItem  />
        <PopUp/>



    </div>
}

export default Video