import React from 'react';
import clas from './videoSlide.module.css'

const VideoSlide = ({item}) => {
    let video = item.image_Url_Name

    return (
        <>
            <video width="100%" src={video} controls className={clas.videoItem}> </video>
        </>
    );
};

export default VideoSlide;