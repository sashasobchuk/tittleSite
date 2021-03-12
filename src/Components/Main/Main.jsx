import React from "react";
import './Main.css'
import Mailer from "./mailer/mailer";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
// import {DownLoAdMainPage} from "../../redux/MainPageReducer";

const Main = () => {
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(DownLoAdMainPage())
    // },[])
    return <>
        <div className="fotoSlider">

        </div>
        <div className='videos'>

        </div>


    </>
}

export default Main