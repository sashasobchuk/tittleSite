import React from 'react';
import downloadFotoIcon from "../../../acces/forFoto/downloadFotoIcon.png";
import {useDispatch, useSelector} from "react-redux";
import clas from './popUp.module.css'
import {closePopUp, MakeNewItem} from "../../../redux/filePageReducer";


const PopUp = ({props}) => {
    const dispatch = useDispatch()
    const fileTittle = useSelector(state => state.filePage.newFileTittle)
    const popupDisplay = useSelector(state => state.filePage.popupDisplay)

    const closePopUpHandeler = () => {
        dispatch(closePopUp('none'))
    }
    const onclickImgHandler = (e) => {
        debugger
        for ( let i = 0;i<e.target.files.length ; i++){
            dispatch(MakeNewItem(e.target.files[i], fileTittle,props.fileType))
        }
        closePopUpHandeler()
    }

    return (
        <>
            <div className={clas.popUp} style={{display: popupDisplay}}>
                <img className={clas.img} src={downloadFotoIcon} alt='error'/>
                <input className={clas.close} onClick={closePopUpHandeler} value='x' type='button'/>
                <input className={clas.inputFile}  multiple={true} type='file' onChange={(event => onclickImgHandler(event))} />
            </div>
        </>
    );
}


export default PopUp;