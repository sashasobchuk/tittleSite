import React from "react";
import  clas from './Main.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DownLoAdMainPage} from "../../redux/MainPageReducer";
import FotoSlide from "./fotoSlide/fotoSlide";
import VideoSlide from "./videoSlide/videoSlide";
import Youtobe from "./youtoobeSlide/youtobe";
import {downloadYouTube} from "../../redux/youtoobeReducer";
import AddLink from "./youtoobeSlide/addLink";

const   Main = () => {
    const dispatch = useDispatch()
    const fotoItems = useSelector(state =>state.MainPage.fotoItems)
    const videoItems = useSelector(state =>state.MainPage.videoItems)
    const sortType = useSelector(state =>state.filePage.sortType)
    const youtobeLinks = useSelector(state =>state.youTube.links)

    useEffect(()=>{
        dispatch(DownLoAdMainPage(sortType,0,10))
        dispatch(downloadYouTube())
    },[dispatch,sortType])
    return <div className={clas.main}>

        <h2 className={clas.Tittle}>PHOTOS</h2>
                <div className={clas.fotoSlider}>
                    <div className={clas.fotoContainer}>
                        {fotoItems.map((item,index)=>
                            <FotoSlide key={index} item={item}/>
                        )}
                    </div>
                </div>
        <h2 className={clas.Tittle}>VIDEOS</h2>
                <div className={clas.videoSlider}>
                    <div className={clas.videoContainer}>
                        {videoItems.map((item,index)=>
                            <VideoSlide key={index} item={item}/>
                        )}
                    </div>
                </div>
        <h2 className={clas.Tittle}>youTube Links</h2>
                 <div className={clas.youtoobeSlider}>
                    <div className={clas.youtoobeContainer}>
                        {youtobeLinks.map((link,index)=>
                            <Youtobe key={link.id} link={link}/>
                        )}<AddLink/>
                    </div>
                </div>


    </div>
}

export default Main