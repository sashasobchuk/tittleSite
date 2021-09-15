import React, {useState} from 'react';
import clas from './file.module.css'

import downloadFotoIcon from './../../acces/forFoto/downloadFotoIcon.png'
import {useDispatch} from "react-redux";
import {changeNewFileTittle, showePopUp} from "../../redux/filePageReducer";
// import {changeNewFotoTittle, showePopUp} from "../../redux/fotoPageReducer";

const AddFileItem = () => {
    const dispatch = useDispatch()

const[tittle,changeTittle]= useState('');

    const showPopupHandler=()=>{
        // debugger
        dispatch(  changeNewFileTittle(tittle))

        /**  і сетаєм нову tittle в редюсер*/
        dispatch(showePopUp('flex'))

    }
    return (<>
        <div className={clas.fotoItemDownload}>
            <div className={clas.image_upload}>
                <img className={clas.imgDiv} width='100%' src={downloadFotoIcon} alt='foto'
                onClick={showPopupHandler}/>
            </div>
            <input className={clas.inputTittle} type="text" value={tittle} onChange={(e)=>changeTittle(e.target.value)}/>
        </div>

    </>)
};

export default AddFileItem;