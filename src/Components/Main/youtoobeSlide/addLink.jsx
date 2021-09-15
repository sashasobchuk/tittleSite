import React, {useState} from 'react';

// import downloadFotoIcon from './../../acces/forFoto/downloadFotoIcon.png'
import downloadFotoIcon from './../../../acces/forFoto/downloadFotoIcon.png'
import {useDispatch} from "react-redux";

import clas from './youtobe.module.css'
import {postItem} from "../../../redux/youtoobeReducer";

const AddLink = () => {
    const dispatch = useDispatch()
    const[link,changeLink]=useState('')


    const addHandler=()=>{
     dispatch(postItem(link))
        changeLink('')

    }


    return (<>
        <div className={clas.addLinkContainer}>
            <img className={clas.img} src={downloadFotoIcon} alt=""/>
            <div className={clas.input}>
                <input type="text" placeholder='link here' value={link} onChange={(e)=>changeLink(e.target.value)}/>
                <button onClick={addHandler}>add link</button>
            </div>

        </div>

    </>)
};

export default AddLink;